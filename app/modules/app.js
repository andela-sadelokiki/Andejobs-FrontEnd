'use strict'

var app = angular.module('Andejobs', ['ngMaterial','ngRoute', 'ngStorage']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl:'views/home.view.html',
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
      controller: 'UserCtrl',
      resolve: {
        adminPermit: ['UserService', '$location', '$localStorage', 
        function(UserService, $location, $localStorage){
          if (Object.keys(UserService.currentUser).length === 0) {
            $location.path('/signin')
          } 
          else if (UserService.currentUser.isAdmin) {
            console.log(UserService.currentUser.isAdmin);
            $location.path('/jobs');
          }
          //  } else {
          //    $location.path('/signin')
          //  }
          // // UserService.getUser(UserService.currentUser._id function(data) {
          //   console.log(data);
          //   if (!data.isAdmin) {
          //     $location.path('/admin');
          //   } else {
          //     $location.path('/signin')
          //   }
          // });
          // var token = $localStorage.token;
          // if(token){
          //   UserService.getUser(function(data){
          //     console.log(data);
          //   });
          // }
          // else{
          //   $location.path('/signin')
          // }
        }]
      }
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


