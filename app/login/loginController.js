'use_strict';

angular
	.module('app')
	.controller('loginController', ['$scope', '$rootScope', 'loginService'
		, function($scope, $rootScope, loginService) {
			loginService.ClearCredential();

			loginService.Login($scope.username, $scope.password, function(response) {
				if (response.success) {
					loginService.SetCredential($scope.username, $scope.password);
				} else {
					$scope.error = response.message;
				}
			});
	}]);

