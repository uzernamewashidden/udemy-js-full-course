let startBtn = document.getElementById('start'),  // Получить кнопку "Начать расчет" через id

    budget = document.getElementsByClassName('budget-value')[0],  // Получить все блоки в правой части программы через классы (которые имеют класс название-value)
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    inputsExpenses = document.getElementsByClassName('expenses-item'),  // Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
    
    expensesBtn = document.getElementsByTagName('button')[0],  // Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    
    optionalExpensesInputs = document.querySelectorAll('.optionalexpenses-item'),  // Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    
    incomeInput = document.querySelector('.choose-income'), // Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    savingsCheckbox = document.querySelector('#savings'),
    savingsSum = document.querySelector('.choose-sum'),
    savingsPercent = document.querySelector('.choose-percent'),
    yearInput = document.querySelector('.year-value'),
    monthInput = document.querySelector('.month-value'),
    dayInput = document.querySelector('.day-value');
