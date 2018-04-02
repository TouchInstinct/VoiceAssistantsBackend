const express = require('express');
const pizzaInfo = require('../pizza/pizza_info.js');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const pizzaName = req.query['pizza'];
    if (pizzaName != null) {
        res.send(pizzaInfo.getPizzaInfoByUserCommand(pizzaName))
    } else {
        res.send("Делаем музыкальную пиццу")
    }
});

module.exports = router;
