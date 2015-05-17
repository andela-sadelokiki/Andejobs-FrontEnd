'use strict'

var app = angular.module('Andejobs', ['ngMaterial','ngRoute', 'ngStorage']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl:'views/signedin.view.html',
      controller:'HomeCtrl'
    })
    .when('/signin',{
    templateUrl:'views/signin.view.html',
    controller:'UserCtrl'
    })
    .when('/signup',{
    templateUrl:'views/signup.view.html',
    controller:'UserCtrl'
    })
    .when('/jobs',{
      templateUrl:'views/jobs.view.html',
      controller:'JobsCtrl'
    })
    .when('/submit',{
      templateUrl:'views/submit.view.html',
      controller:'HomeCtrl'
    })
    .when('/admin',{
      templateUrl:'views/admin.html',
      controller: 'JobsCtrl'
    })
    .when('/signout', {
      templateUrl: 'views/signout.html',
      controller: 'UserCtrl'
    })

}]);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
    return {
        'request': function (config) {
            config.headers = config.headers || {};
            if ($localStorage.token) {
                // console.log('Ayo');
                config.headers.Authorization = 'Bearer ' + $localStorage.token;
            }
            return config;
        },
        'responseError': function(response) {
            if(response.status === 401 || response.status === 403) {
                $location.path('/signin');
            return $q.reject(response);
            }
        }
    };
  }]);
}]);


