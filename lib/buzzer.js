"use strict";

var gpio = require("pi-gpio");

var Buzzer = function (options) {
    this.options = options;
    gpio.close(this.options.buzzer_pin);
};

Buzzer.prototype = {
    buzz: function (secs) {
        this.on(setTimeout(this.off.bind(this), secs * 1000));
    },
    on: function (done) {
        gpio.open(this.options.buzzer_pin, "output", function () {
            gpio.write(this.options.buzzer_pin, 1, done);
        }.bind(this));
    },
    off: function () {
        gpio.write(this.options.buzzer_pin, 0, function () {
            gpio.close(this.options.buzzer_pin);
        }.bind(this));
    },
};

module.exports = Buzzer;
