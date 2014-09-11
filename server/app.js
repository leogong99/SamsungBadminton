/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if (config.seedDB) {
	require('./config/seed');
}

// Setup server
var app = express();
var server = require('http').createServer(app);

var http = require('http');
var favicon = require('serve-favicon');

var _favicon = favicon('/public/favicon.ico');

var server = http.createServer(function onRequest(req, res) {
	_favicon(req, res, function onNext(err) {
		if (err) {
			res.statusCode = 500;
			res.end();
			return;
		}

		// continue to process the request here, etc.

		res.statusCode = 404;
		res.end('oops');
	});
});


require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function() {
	console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;