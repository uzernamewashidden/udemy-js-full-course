// Восстановить порядок в меню, добавить пятый пункт
let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item'),
    newItem = document.createElement('li');

    menu.insertBefore(menuItems[2], menuItems[1]);
    newItem.classList.add('menu-item');
    newItem.textContent = 'Пятый пункт';
    menu.appendChild(newItem);



// Заменить картинку заднего фона на другую из папки img
document.body.style.background = "url('./img/apple_true.jpg') center no-repeat";



// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';


// Удалить рекламу со страницы
let adv = document.querySelector('.adv');
adv.style.display = "none";


// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let answer = prompt('Ваше отношение к технике apple', '');
let answerFild = document.querySelector('#prompt');
answerFild.textContent = answer;