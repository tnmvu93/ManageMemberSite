'use strict';

angular
	.module('app')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/edit/:id', {
			controller: 'editMemberController',
			templateUrl: 'app/member/editMember.html'
		});
	}])
	.controller('editMemberController', ['$scope', '$location', '$routeParams', 'memberService',
		function($scope, $location, $routeParams, memberService) {
			var member = memberService.getMemberById($routeParams.id);
			if (!member) {
				$location.path('/');
				return;
			}

			$scope.id = member.id;
			$scope.name = member.name;
			$scope.date = member.date;
			$scope.gender = member.gender;

			$scope.edit = function() {
				var updatingMember = {
					id: $scope.id,
					name: $scope.name,
					date: $scope.date,
					gender: $scope.gender
				};				
				memberService.edit(updatingMember);
				$location.path('/');
			}
	}]);