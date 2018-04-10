$(document).ready(function(){ 

// Подменю
 $("#about").click(function() { 
    $(".submenu").fadeToggle("100");
    /* $(".submenu").animate({top: '80px'}, 100); */
});

// Город
 $("#city").click(function() { 
    $(".city").fadeToggle("100");
    /* $(".submenu").animate({top: '80px'}, 100); */
}); 

 });

// Кнопка наверх
var limit     = $(window).height()/3,
	$backToTop = $('#back-to-top');

$(window).scroll(function () {
	if ( $(this).scrollTop() > limit ) {
		$backToTop.fadeIn();
	} else {
		$backToTop.fadeOut();
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