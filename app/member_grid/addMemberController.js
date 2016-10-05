'use strict';

angular
	.module('app')
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