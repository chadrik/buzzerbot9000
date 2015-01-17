"use strict";

var express = require('express');
var config = require('configure');

var Buzzer = require('./lib/buzzer.js');
var buzzer = new Buzzer(config);

var app = express();

console.log('Starting...');

app.get('/open', function (request, response) {
    buzzer.buzz();
    response.send("Open Sesame!");
});

var port = Number(config.port);
app.listen(port, function () {
    console.log('Listening on ' + port);
});
