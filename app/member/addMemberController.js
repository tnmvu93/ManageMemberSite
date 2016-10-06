'use strict';

angular
	.module('app')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/add', {
			controller: 'addMemberController',
			templateUrl: 'app/member/addMember.html'
		});
	}])
	.controller('addMemberController', ['$scope', '$location', 'memberService',
		function($scope, $location, memberService) {
	
			$scope.add = function() {
				var member = {
					'Name' : $scope.name,
					'Date' : $scope.date,
					'Gender' : $scope.gender
				}
				memberService.Add(member);
				$location.path('/');
			}
	}]);