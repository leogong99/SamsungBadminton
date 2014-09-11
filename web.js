var gzippo = require('gzippo');
var express = require('express');
var app = express(); 
app.use(gzippo.staticGzip("" + __dirname + "/../public"));
console.log("" + __dirname + "/../public");
app.listen(process.env.PORT || 9000);