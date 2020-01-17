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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let exp = prompt('Введите обязательную статью расходов в этом месяце', '');
            let expSum = prompt('Во сколько обойдется?', '');
        
            if (typeof(exp)==='string' && typeof(exp) != null && typeof(expSum) != null && exp !== '' && expSum != '' && exp.length < 50) {
                appData.expenses[exp] = expSum;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Ежедневный бюджет ${appData.moneyPerDay}`);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент');
    
            appData.monthIncome = save/100/12*percent;
            alert(`Доход в месяц с вашего депозита ${appData.monthIncome}`);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let optExp = prompt('Статья необязательных расходов?', '');
    
            if (typeof(optExp)==='string' && typeof(optExp) != null && optExp !== '' && optExp.length < 50) {
                appData.optionalExpenses[i] = optExp;
            } 
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof(items) == 'string' && typeof(items) != null && items !== '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
        } else {
            console.log('Invalid data');
        }
        appData.income.forEach((el, i) => alert(`Способы доп. заработка: ${i+1} - ${el}`));
    }

};

for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}


