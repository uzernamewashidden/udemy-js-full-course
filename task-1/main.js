let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let exp1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let expSum1 = prompt('Во сколько обойдется?', '');
let exp2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let expSum2 = prompt('Во сколько обойдется?', '');

appData.expenses[exp1] = expSum1;
appData.expenses[exp2] = expSum2;


let dailyBudget= appData.budget / 30;
alert(`Бюджет на день ${dailyBudget}`);