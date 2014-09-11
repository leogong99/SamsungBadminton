/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
	Thing.create({
		date: new Date('Sep 4, 2014'),
		time: '07:00PM',
		location: '13100 Mitchell Road, Richmond, BC V6V 1M8'
	}, {
		date: new Date('Sep 11, 2014'),
		time: '07:00PM',
		location: '13100 Mitchell Road, Richmond, BC V6V 1M8'
	});
});

User.find({}).remove(function() {
	User.create({
		provider: 'local',
		name: 'Test User',
		email: 'test@test.com',
		password: 'test'
	}, {
		provider: 'local',
		role: 'admin',
		name: 'Admin',
		email: 'admin@admin.com',
		password: 'admin'
	}, function() {
		console.log('finished populating users');
	});
});