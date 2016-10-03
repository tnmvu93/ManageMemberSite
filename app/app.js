'use_strict';

(function () {
	angular
		.module('app', ['ngRoute', 'ngCookies'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			.when('/login', {
				controller: 'loginController',
				templateUrl: 'app/login/login.html'
			})
			.when('/', {
				controller: 'memberController',
				templateUrl: 'app/member_grid/member_grid.html'
			})
			.otherwise({
				redirectTo: '/login'
			});
		}]);
})();