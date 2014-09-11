'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ThingSchema = new Schema({
	date: Date,
	time: String,
	location: String,
	register: Array,
	attendent: Array
});

module.exports = mongoose.model('Thing', ThingSchema);