'use_strict';

(function () {
	angular
		.module('app', ['ngRoute', 'ngCookies'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			.otherwise({
				redirectTo: '/login'
			});
		}])
		.run(['$rootScope', '$location', '$cookieStore', '$http',
			function($rootScope, $location, $cookieStore, $http) {
				$rootScope.globals = $cookieStore.get('globals') || {};
				if ($rootScope.globals.currentUser) {
					$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authData;
				}

				$rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
					if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
						$location.path('/login');
					}
				})
		}]);
})();