var express = require('express');
var pizzaInfo = require('../pizza/pizza_info.js');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const pizzaName = req.query['pizza'];
    if (pizzaName !== undefined) {
        res.send(pizzaInfo.getPizzaInfoByUserCommand(pizzaName))
    } else {
        res.send("Делаем музыкальную пиццу")
    }
});

module.exports = router;
