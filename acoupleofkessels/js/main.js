$(function () {
    $(document).on('click', '.navbar a', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 450);
    });
});

var weddingDate = new Date('2017/06/24 16:30:30');
var countdownUnits = countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS;
Vue.component('countdown', {
    template: '<div>{{ days }} days, {{ hours }} hours,<br />{{ minutes }} minutes, {{ seconds }} seconds<span v-if="past"> ago</span></div>',
    data: function() {
        return {
            timespan: countdown(weddingDate, null, countdownUnits),
            now: Date.now(),
            untilDate: weddingDate  
        }
    },
    mounted: function() {
        var self = this;
        window.setInterval(function () {
            self.now = Date.now();
            self.timespan = countdown(self.untilDate, null, countdownUnits);
        }, 1000);
    },
    computed: {
        timestamp: function () {
            var self = this;
            return self.timespan.toString().replace(' and', ',');
        },
        days: function () {
            var self = this;
            return self.timespan.days;
        },
        hours: function () {
            var self = this;
            return self.timespan.hours;
        },
        minutes: function () {
            var self = this;
            return self.timespan.minutes;
        },
        seconds: function () {
            var self = this;
            return self.timespan.seconds;
        },
        past: function () {
            var self = this;
            return self.untilDate < self.now;
        }
    }
});

var app = new Vue({
    el: "#app"
});