$(document).ready(function () {

// Подменю
    $("#about").click(function () {
        $(".submenu").fadeToggle("100");
        /* $(".submenu").animate({top: '80px'}, 100); */
    });

// Город
    $(".drop-down").click(function () {
        $(".list").fadeToggle("100");
        /* $(".submenu").animate({top: '80px'}, 100); */
    });

});

// Кнопка наверх
var limit = $(window).height() / 3,
        $backToTop = $('#back-to-top');

$(window).scroll(function () {
    if ($(this).scrollTop() > limit) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
    if ($(window).width() <= 768) {
        if ($(this).scrollTop() > 15) {
            $('.logo-wrap').css({
                "position": "fixed",
                "margin-left": "-15px",
                "padding-left": "15px",
                "padding-right": "15px",
                "margin-top": "-10px",
                "padding-top": "10px"
            })
        } else {
            $('.logo-wrap').css({
                "position": "static",
                "margin-left": "0",
                "padding-left": "0",
                "padding-right": "0",
                "margin-top": "-0",
                "padding-top": "0"
            })
        }
    }
});

// scroll body to 0px on click
$backToTop.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;

// Модальное окно
    $('.modal-popup').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-top-up'
    });

// ===== Init modal form ====
    $('#callbackForm').sendForm({
        successTitle: "Ваша заявка принята!",
        successText: "Наш сотрудник свяжется с Вами в самое ближайшее время.",
        autoClose: true,
        autoCloseDelay: 3000
    });
// Модальное окно

});