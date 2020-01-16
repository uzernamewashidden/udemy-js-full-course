let money,  time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let exp = prompt('Введите обязательную статью расходов в этом месяце', '');
        let expSum = prompt('Во сколько обойдется?', '');
    
        if (typeof(exp)==='string' && typeof(exp) != null && typeof(expSum) != null && exp !== '' && expSum != '' && exp.length < 50) {
            appData.expenses[exp] = expSum;
        } else {
            i--;
        }
    }
}

chooseExpenses();

//  1) расчет дневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Ежедневный бюджет ${appData.moneyPerDay}`);
}

//  2) расчет уровня достатка
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент');

        appData.monthIncome = save/100/12*percent;
        alert(`Доход в месяц с вашего депозита ${appData.monthIncome}`);
    }
}

checkSavings();

//  3) функция для определения необязательных расходов
function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let optExp = prompt('Статья необязательных расходов?', '');

        if (typeof(optExp)==='string' && typeof(optExp) != null && optExp !== '' && optExp.length < 50) {
            appData.optionalExpenses[i] = optExp;
        } else {
            i--;
        }
    }
}

chooseOptExpenses();