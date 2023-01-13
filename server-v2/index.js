"use strict";
exports.__esModule = true;
var http = require("http");
var App_1 = require("./App");
require('dotenv').config();
var port = process.env.PORT || 3070;
App_1["default"].set("port", port);
var server = http.createServer(App_1["default"]);
server.listen(port);
module.exports = App_1["default"];
server.on("listening", function () {
    var addr = server.address();
    var bind = (typeof addr === "string") ? "pipe ".concat(addr) : "port ".concat(addr.port);
    console.log("Listening on ".concat(bind));
});
