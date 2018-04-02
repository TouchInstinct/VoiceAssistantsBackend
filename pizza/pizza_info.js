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
        const wrapName = name => `"${name}"`

        if (!pizza) {
            const pizzaNames = pizzas.map(pizza => wrapName(pizza.name)).join(", ")
            return `В ассортимент пиццерии "ДоРеМи" входят пиццы ${pizzaNames}. Могу рассказать состав каждой пиццерии.`
        }

        const ingredients = pizza.ingredients.map(ingredient => ingredient.toLowerCase()).join(", ")
        return `В пиццу ${wrapName(pizza.name)} входят ${ingredients}.`
    },

    getPizzaInfoByUserCommand: function (command) {
        command = command.toLowerCase();
        const pizza = pizzas.find(pizza => (
            pizza.base_name.some(base => (command.indexOf(base) !== -1))
        ))

        return this.getPizzaInfoByPizzaName(pizza)
    },


};


module.exports = pizzaInfo;
