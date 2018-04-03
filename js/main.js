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

    figlet('Greetings!', 'doom', function (err, data) {
        if (!err) {
            console.info(data);
            console.info('I\'m always open to discussions surrounding new opportunities (remote or in the Lancaster, PA area). Shoot me an email at: info@korykessel.com.');
            console.info('Proudly hosted by Microsoft Azure - this site is an Express Node app! Woo!');
        }
    });


});