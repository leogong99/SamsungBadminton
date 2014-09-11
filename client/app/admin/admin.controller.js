'use strict';

angular.module('samsungBadmintonApp')
	.controller('AdminCtrl', function($scope, $http, Auth, User) {

		function getWeekDay(d, day) {
			d = new Date(d);
			var newDay = d.getDay(),
				diff = d.getDate() - day + (newDay === 0 ? -6 + day : 4 + day); // adjust when day is sunday
			return new Date(d.setDate(diff));
		}

		$scope.newThing = {
			time: '7:00PM',
			location: '13100 Mitchell Road, Richmond, BC V6V 1M8',
			date: getWeekDay(new Date(), 3)
		};

		// Use the User $resource to fetch all users
		$scope.users = User.query();
		//$scope.things = Thing.query();

		$scope.deleteUser = function(user) {
			User.remove({
				id: user._id
			});
			angular.forEach($scope.users, function(u, i) {
				if (u === user) {
					$scope.users.splice(i, 1);
				}
			});
		};

		$scope.awesomeThings = [];

		$http.get('/api/things').success(function(awesomeThings) {
			$scope.awesomeThings = awesomeThings;
		});

		$scope.addThing = function() {
			if ($scope.newThing === '') {
				return;
			}
			$http.post('/api/things', {
				name: $scope.newThing
			});
			//$scope.newThing = '';
			//$scope.awesomeThings.push($scope.newThing);
		};

		$scope.deleteThing = function(thing) {
			$http.delete('/api/things/' + thing._id);
			angular.forEach($scope.awesomeThings, function(u, i) {
				if (u === thing) {
					$scope.awesomeThings.splice(i, 1);
				}
			});
		};
	});