'use_strict';

(function () {
	angular
		.module('app', ['ngRoute'])
		.config(function($routeProvider) {
			$routeProvider.otherwise({
				templateUrl: 'dest/login/login.html'
			})
		});
})();