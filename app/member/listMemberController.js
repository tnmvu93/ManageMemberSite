'use strict';

angular
	.module('app')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/', {
			controller: 'memberController',
			templateUrl: 'app/member/listMember.html'
		});
	}])
	.controller('memberController', ['$scope', 'memberService',
		function($scope, memberService) {
			$scope.members = memberService.getAll();
	}]);