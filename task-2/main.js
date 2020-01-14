let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let exp = prompt('Введите обязательную статью расходов в этом месяце', '');
    let expSum = prompt('Во сколько обойдется?', '');

    if (typeof(exp)==='string' && typeof(exp) != null && typeof(expSum) != null && exp !== '' && expSum != '' && exp.length < 50) { 
        appData.expenses[exp] = expSum;
    } else {
        i--;
    }
}


//            Ц И К Л   W H I L E
// let i = 0;
// while (i < 2) {
//     console.log(i);
//     let exp = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         expSum = prompt('Во сколько обойдется?', '');

//     if (typeof (exp) === 'string' && typeof (exp) != null && typeof (expSum) != null && exp !== '' && expSum != '' && exp.length < 50) {
//         appData.expenses[exp] = expSum;
//     } else {
//         i--;
//     }

//     i++;
// }

//            Ц И К Л   D O...  W H I L E
// let i = 0;
// do {
//     let exp = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         expSum = prompt('Во сколько обойдется?', '');

//     if (typeof (exp) === 'string' && typeof (exp) != null && typeof (expSum) != null && exp !== '' && expSum != '' && exp.length < 50) {
//         appData.expenses[exp] = expSum;
//     } else {
//         i--;
//     }
//     i++;
// } while (i < 2);



appData.moneyPerDay = appData.budget / 30;
// console.log(appData.expenses);


alert(`Ежедневный бюджет ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}