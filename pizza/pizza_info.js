const pizzas = [
    {
        name: "Маргарита",
        base_name: ["маргарит"],
        ingredients: ["Тесто", "Томатный соус", "Сыр Моцарелла", "Томаты", "Базилик"]
    },
    {
        name: "Пепперони",
        base_name: ["пепперони", "пеперони", "пепирони"],
        ingredients: ["Тесто", "Томатный соус", "Сыр Моцарелла", "Пепперони"]
    },
    {
        name: "Вегетарианская",
        base_name: ["вегетариан"],
        ingredients: ["Тесто", "Томатный соус", "Сыр Моцарелла", "Грибы", "Маслины", "Зеленый перец", "Сыр Фета", "Томаты", "Орегано"]
    },
    {
        name: "Четыре сыра",
        base_name: ["четыр", "сыр"],
        ingredients: ["Тесто", "Томатный соус", "Сыр Моцарелла", "Сыр пармезан", "Сыр Чеддер", "Сыр Блючиз"]
    },
    {
        name: "Гавайская",
        base_name: ["гавай"],
        ingredients: ["Тесто", "Томатный соус", "Сыр Моцарелла", "Куриное филе", "Ананасы"]
    },
];

const pizzaInfo = {

    getPizzaInfoByPizzaName: function (pizza) {
        if (pizza === undefined) {
            return "В ассортимент пиццерии \"ДоРеМи\" входят пиццы " + pizzas.map((pizza) => "\"" + pizza.name + "\"").reduce((prev, next) => prev + ", " + next) + ". Могу рассказать состав каждой пиццерии."
        } else {
            return "В пиццу \"" + pizza.name + "\" входят " + pizza.ingredients.map((pizza) => pizza.toLowerCase()).reduce((prev, next) => prev + ", " + next) + "."
        }
    },

    getPizzaInfoByUserCommand: function (command) {
        command = command.toLowerCase();
        const pizza = pizzas.find((pizza) => {
                let contains = false;
                pizza.base_name.forEach((base) => {
                    contains = contains || command.indexOf(base) !== -1
                });
                return contains
            }
        );

        return this.getPizzaInfoByPizzaName(pizza)
    },


};


module.exports = pizzaInfo;
