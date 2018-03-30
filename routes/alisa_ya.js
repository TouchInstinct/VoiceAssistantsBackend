var express = require('express');
var pizzaInfo = require('../pizza/pizza_info.js');
var router = express.Router();

/* GET home page. */

router.use('/', function (req, res, next) {
    const body = req.body;

    const commandText = body.request.command;
    const answer = pizzaInfo.getPizzaInfoByUserCommand(commandText);

    res.json({
        "response": {
            "text": answer,
            "buttons": [
                {
                    "title": "Заказать",
                    "url": "https://doremi.fake/"
                }
            ],
            "end_session": false
        },
        "session": {
            "session_id": body.session.session_id,
            "message_id": body.session.message_id,
            "user_id": body.session.user_id
        },
        "version": body.version
    })

});

module.exports = router;