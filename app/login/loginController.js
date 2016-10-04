'use_strict';

angular
	.module('app')
	.controller('loginController', ['$scope', '$rootScope', '$location', 'loginService',
		function($scope, $rootScope, $location, loginService) {
			loginService.ClearCredential();

			$scope.login = function () {
					loginService.Login($scope.username, $scope.password, function(response) {
						if (response.success) {
							loginService.SetCredential($scope.username, $scope.password);
							$location.path('/');
						} else {
							$scope.error = response.message;
						}
				});
			}
	}]);

