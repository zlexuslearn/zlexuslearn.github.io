// ======= Ajax Submit Form Plugin =======
(function($) {
    jQuery.fn.sendForm = function(options) {
        options = $.extend({
            successTitle: "Спасибо, что выбрали нас!",
            successText: "Мы свяжемся с Вами в ближайшее время.",
            errorTitle: "Сообщение не отправлено!",
            errorSubmit: "Ошибка отправки формы!",
            errorNocaptcha: "Вы не заполнили каптчу",
            errorCaptcha: "Вы не прошли проверку каптчи",
            mailUrl: "../form-submit/submit.php",
            autoClose: false,
            autoCloseDelay: 5000
        }, options);

        var make = function() {
            var $this = $(this);
            $(this).submit(function() {
                var data = $(this).serialize();
                $.ajax({
                    url: options.mailUrl,
                    type: "POST",
                    data: data,
                    beforeSend: function() {
                        $this.find('.btn-submit').parents('.form__form').addClass('sending');
                    },
                    success: function(res) {
                        function errorRes(errorMessage) {
                            $this.find('.btn-submit').parents('.form__form').removeClass('sending');
                            $this.append('<div class="form__error">' + errorMessage + '</div>');
                            setTimeout(function() {
                                $this.find('.form__error').remove();
                            }, 5000);
                        }
                        if (res == 1) {
                            $this[0].reset();
							grecaptcha.reset();
                            $this.find('.form__hide-success').slideUp().delay(5000).slideDown();
                            $this.find('.btn-submit').parents('.form__form').removeClass('sending');
                            $this.find('.form__hide-success').after('<div class="form__sys-message"></div>');
                            $this.find('.form__sys-message').html('<div class="form__success-title">' + options.successTitle + '</div><p class = "form__success-text" >' + options.successText + '</p>');
                            setTimeout(function() {
                                $this.find('.form__sys-message').fadeOut().delay(3000).remove();
                                if (options.autoClose) {
                                    $.magnificPopup.close();
                                }
                            }, options.autoCloseDelay);
                        } else if (res == 2) {
                            errorRes(options.errorNocaptcha);
                        } else if (res == 3) {
                            errorRes(options.errorCaptcha);
                        } else {
                            errorRes(options.errorSubmit);
                        }
                    },
                    error: function() {
                        errorRes(options.errorSubmit);
                    }
                });
                return false;
            });

        } // end make

        return this.each(make);
    };
})(jQuery);