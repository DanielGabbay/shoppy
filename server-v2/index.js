"use strict";
exports.__esModule = true;
var http = require("http");
var app_1 = require("./app");
require('dotenv').config();
var port = process.env.PORT || 3070;
app_1["default"].set("port", port);
var server = http.createServer(app_1["default"]);
server.listen(port);
server.on("listening", function () {
    var addr = server.address();
    var bind = (typeof addr === "string") ? "pipe ".concat(addr) : "port ".concat(addr.port);
    console.log("Listening on ".concat(bind));
});
module.exports = app_1["default"];
