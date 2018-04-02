const express = require('express');
const Assistant = require('actions-on-google').DialogflowApp;
const pizzaInfo = require('../pizza/pizza_info.js');
const app = express.Router();

// запрос на обработку вебхуков
app.use('/', function (req, res, next) {
    // Инициализируем API.AI assistant объект.
    const assistant = new Assistant({request: req, response: res});

    const ASK_INGREDIENTS_ACTION = 'listOfIngredients';  // Название интента
    const PIZZA_PARAMETER = 'pizza'; // Название сцщности

    function getIngredients(assistant) {
        let pizzaName = assistant.getArgument(PIZZA_PARAMETER);
        // Respond to the user with the current temperature.
        assistant.tell(pizzaInfo.getPizzaInfoByUserCommand(pizzaName));
    }

    // Настраиваем маршрутизацию
    let actionRouter = new Map();
    actionRouter.set(ASK_INGREDIENTS_ACTION, getIngredients);
    assistant.handleRequest(actionRouter);
});

module.exports = app;
