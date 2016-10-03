'use strict';

angular
	.module('app')
	.factory('loginService', ['$rootScope', '$http', '$cookieStore',
		 function($rootScope, $http, $cookieStore) {
			var service = {};

			service.Login = function (username, password, callback) {
				var response = {
					success: username === 'admin' && password === 'admin'
				}
				callback(response);
			};

			service.SetCredential = function(username, password) {
				var authData = username + ':' + password;
				$rootScope.globals = {
					username: username,
					authData: authData
				}

				$http.defaults.headers.common['Authorization'] = 'Basic ' + authData;
				$cookieStore.put('globals', $rootScope.globals);
			};

			service.ClearCredential = function() {
				$rootScope.globals = {};
				$cookieStore.remove('globals');
				$http.defaults.headers.common['Authorization'] = 'Basic ';
			};

			return service;
	}]);