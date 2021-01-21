"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var bodyParser = require("body-parser");
var app = new app_1["default"]({
    port: 5000,
    controllers: [],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
});
app.listen();
