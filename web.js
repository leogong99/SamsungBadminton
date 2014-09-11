var gzippo = require('gzippo');
var express = require('express');
var app = express(); 
app.use(gzippo.staticGzip("" + __dirname + "/dist/public"));
app.listen(process.env.PORT || 9000);