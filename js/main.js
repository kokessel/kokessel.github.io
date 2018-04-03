jQuery(function ($) {
    $.fn.fadeInOrder = function (options) {

        var settings = $.extend({
            fadeSpeed: 300
        }, options);

        $.fn.getFade = function () {
            return parseInt(this.data('fade'));
        };

        $.fn.sortByFade = function () {
            var ret = $(this).sort(function (a, b) {
                a = $(a).getFade();
                b = $(b).getFade();
                return a > b ? 1 : b > a ? -1 : 0;
            });

            return ret;
        };

        var r = $(this).sortByFade().each(function (i) {
            $(this).delay(settings.fadeSpeed * i).css('visibility', 'visible').hide().fadeIn(settings.fadeSpeed);
        });

        return r;
    };

    $('[data-fade]').fadeInOrder({fadeSpeed: 100});

    figlet('Greetings!', 'Doom', function (err, data) {
        if (!err) {
            console.info(data);
        }
    });
});