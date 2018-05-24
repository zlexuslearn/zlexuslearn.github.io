/**
 * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
 *
 * @private
 * @author Todd Motto
 * @link https://github.com/toddmotto/foreach
 * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
 * @callback requestCallback      callback   - Callback function for each iteration.
 * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
 * @returns {}
 */
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
var siteOverlay = document.querySelector(".site-overlay");

if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {

            this.classList.toggle("is-active");
        }, false);
    });
    siteOverlay.addEventListener("click", function () {
        forEach(hamburgers, function (hamburger) {
            hamburger.classList.toggle("is-active");
        });
    }, false);
}

// custom.js

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


// slider.js

(function () {
    $('.flex-container').waitForImages(function () {
        $('.spinner').fadeOut();
    }, $.noop, true);
    if ($(window).width() >= 1280) {
        $(".flex-slide").each(function () {
            $(this).hover(function () {


                $('.flex-slide').click(function () {
                    $(this).css({
                        '-webkit-flex-grow': '10',
                        'flex-grow': '10'
                    })
                    $(this).find('.flex-about').css({
                        opacity: '0.8'
                    });
                    if ($(window).width() <= 768) {
                        $(this).find('.flex-title').css({
                            transform: 'rotate(360deg)',
                            top: '0%',
                            'text-transform': 'uppercase'

                        });
                    } else {
                        $(this).find('.flex-title').css({
                            transform: 'rotate(360deg)',
                            top: '15%',
                            'text-transform': 'uppercase'

                        });
                    }
                    $(".flex-title").css("width", "80%");
                });

                $('.flex-slide').mouseleave(function () {
                    $(this).css({
                        '-webkit-flex-grow': '1',
                        'flex-grow': '1'
                    });
                    $(".flex-title").css("text-transform", "none");


                    $(".flex-title").css("transform", "rotate(270deg)");
                    $(".flex-title").css("width", "100%");
                });


            }, function () {
                if ($(window).width() <= 425) {
                    $(this).find('.flex-title').css({
                        transform: 'rotate(90)',
                        top: '0%'
                    });
                    $(this).find('.flex-about').css({
                        opacity: '0'
                    });
                } else {
                    $(this).find('.flex-title').css({
                        transform: 'rotate(90)',
                        top: '67%'
                    });
                    $(this).find('.flex-about').css({
                        opacity: '0'
                    });
                }
            })
        });
    }
})();
(function () {
    if ($(window).width() >= 1280) {
        $(".home").click(function () {
            $('.home').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/test.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".home").mouseleave(function () {
            $('.home').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/test.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".home").mouseover(function () {
            $('.home').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/test.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".enclassic").click(function () {
            $('.enclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/en_classic.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".enclassic").mouseleave(function () {
            $('.enclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/en_classic.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".enclassic").mouseover(function () {
            $('.enclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/en_classic.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".artdeco").click(function () {
            $('.artdeco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/art-deco.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".artdeco").mouseleave(function () {
            $('.artdeco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/art-deco.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".artdeco").mouseover(function () {
            $('.artdeco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/art-deco.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".borocco").click(function () {
            $('.borocco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/borocco.jpg)', 'background-size': 'cover', 'background-position': 'center center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".borocco").mouseleave(function () {
            $('.borocco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/borocco.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".borocco").mouseover(function () {
            $('.borocco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/borocco.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".loft").click(function () {
            $('.loft').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/loft.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".loft").mouseleave(function () {
            $('.loft').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/loft.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".loft").mouseover(function () {
            $('.loft').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/loft.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".office").click(function () {
            $('.office').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/office_mebel.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".office").mouseleave(function () {
            $('.office').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/office_mebel.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".office").mouseover(function () {
            $('.office').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/office_mebel.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".provans").click(function () {
            $('.provans').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/provans.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".provans").mouseleave(function () {
            $('.provans').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/provans.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".provans").mouseover(function () {
            $('.provans').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/provans.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".sclassic").click(function () {
            $('.sclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/sovremennaya_classica.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".sclassic").mouseleave(function () {
            $('.sclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/sovremennaya_classica.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".sclassic").mouseover(function () {
            $('.sclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/sovremennaya_classica.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".smebel").click(function () {
            $('.smebel').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/sovremennaya_mebel.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".smebel").mouseleave(function () {
            $('.smebel').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/sovremennaya_mebel.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".smebel").mouseover(function () {
            $('.smebel').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/sovremennaya_mebel.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".hitech").click(function () {
            $('.hitech').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/hitech.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".hitech").mouseleave(function () {
            $('.hitech').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/hitech.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });

        $(".hitech").mouseover(function () {
            $('.hitech').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/hitech.jpg)', 'background-size': 'cover', 'background-position': 'left center', 'background-attachment': 'fixed', transition: '1s'});
        });
    }
    ;
})();
$(function () {
    $().timelinr({
        orientation: 'horizontal',
        // value: horizontal | vertical, default to horizontal
        containerDiv: '#timeline',
        // value: any HTML tag or #id, default to #timeline
        datesDiv: '#dates',
        // value: any HTML tag or #id, default to #dates
        datesSelectedClass: 'selected',
        // value: any class, default to selected
        datesSpeed: 'normal',
        // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
        issuesDiv: '#issues',
        // value: any HTML tag or #id, default to #issues
        issuesSelectedClass: 'selected',
        // value: any class, default to selected
        issuesSpeed: 'fast',
        // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
        issuesTransparency: 0,
        // value: integer between 0 and 1 (recommended), default to 0.2
        issuesTransparencySpeed: 500,
        // value: integer between 100 and 1000 (recommended), default to 500 (normal)
        prevButton: '#prev',
        // value: any HTML tag or #id, default to #prev
        nextButton: '#next',
        // value: any HTML tag or #id, default to #next
        arrowKeys: 'false',
        // value: true/false, default to false
        startAt: 6,
        // value: integer, default to 1 (first)
        autoPlay: 'false',
        // value: true | false, default to false
        autoPlayDirection: 'forward',
        // value: forward | backward, default to forward
        autoPlayPause: 2000
                // value: integer (1000 = 1 seg), default to 2000 (2segs)< 
    });
});


//  $(".owl-carousel").owlCarousel({
//    nav: true,
//    
//  });
$(document).ready(function(){
    $dots_displ = false;
    $marg_owl = 60;
    if (jQuery(window).width() <= 425) {
        $dots_displ = true;
        $marg_owl = 0;
    }
  $(".owl-carousel").owlCarousel({
      items: 1,
      autoWidth: true,
      loop: true,
      center: true,
      dots: $dots_displ,
      nav: true,
      margin: $marg_owl
  });
});

$('#cascade-slider').cascadeSlider({
  itemClass: 'cascade-slider_item',
  arrowClass: 'cascade-slider_arrow'
});





