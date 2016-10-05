'use strict';

angular
	.module('app')
	.controller('memberController', ['$scope', 'memberService',
		function($scope, memberService) {
			$scope.members = memberService.GetAll();
		}]);