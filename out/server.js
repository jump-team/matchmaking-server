"use strict";
// where your node app starts
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var matches = [];
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
    response.status(200);
    response.send("Server online");
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
//# sourceMappingURL=server.js.map