$(document).ready(function() {                   // обработчик события, не позволяющий скриптам выполняться до загрузки страницы

    $('.main_btn, .main_btna, a[href="#sheldure"]').on('click', function() {     
        $('.overlay').fadeIn('slow');            
        $('.modal').slideDown('slow');
    });

    $('.close').on('click', function() {
        $('.modal').slideUp('slow');
        $('.overlay').fadeOut('slow');
    });

});