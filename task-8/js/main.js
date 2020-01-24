let startBtn = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    expensesInput = document.getElementsByClassName('expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesInputs = document.querySelectorAll('.optionalexpenses-item'),
    incomeInput = document.querySelector('.choose-income'),
    savingsCheckbox = document.querySelector('#savings'),
    savingsSum = document.querySelector('.choose-sum'),
    savingsPercent = document.querySelector('.choose-percent'),
    yearInput = document.querySelector('.year-value'),
    monthInput = document.querySelector('.month-value'),
    dayInput = document.querySelector('.day-value');


let money, time;

//  отключаем кнопки, если программа не запущена
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    yearInput.value = new Date(Date.parse(time)).getFullYear();
    monthInput.value = new Date(Date.parse(time)).getMonth() + 1;
    dayInput.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;

});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesInput.length; i++) {
        let exp = expensesInput[i].value;
        let expSum = expensesInput[++i].value;

        if (typeof (exp) === 'string' && typeof (exp) != null && typeof (expSum) != null && exp !== '' && expSum != '' && exp.length < 50) {
            appData.expenses[exp] = expSum;
            sum += +expSum;
        } else {
            i--;
        }
    }
    expenses.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesInputs.length; i++) {
        let optExp = optionalExpensesInputs[i].value;

        appData.optionalExpenses[i] = optExp;
        optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expenses.textContent) / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            level.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = 'Высокий уровень достатка';
        } else {
            level.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudget.textContent = 'Произошла ошибка';
    }
});

incomeInput.addEventListener('input', function () {
    let items = incomeInput.value;
    appData.income = items.split(',');
    income.textContent = appData.income;
});

savingsCheckbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

savingsSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +savingsSum.value,
            percent = +savingsPercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }

});

savingsPercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +savingsSum.value,
            percent = +savingsPercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }

});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};