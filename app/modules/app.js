'use strict'

var app = angular.module('Andejobs',['ngMaterial','ngRoute', 'ngStorage']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl:'views/home.view.html',
      controller:'HomeCtrl'
    })
    .when('/signedin', {
      templateUrl: 'views/signedin.view.html',
      controller:'UserCtrl'
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
    .when('/home',{
      templateUrl:'views/home.view.html',
      controller: 'HomeCtrl'
    })
    .when('/editprofile',{
      templateUrl:'views/editprofile.view.html',
      controller: 'UserCtrl'
    })

    // .when('/admin',{
    //   templateUrl:'views/admin.view.html',
    //   controller: 'JobsCtrl',
    //   resolve: {
    //     adminPermit: ['UserService', '$location','$localStorage', 
    //     function(UserService, $location, $localStorage){
    //       if (Object.keys(UserService.currentUser).length === 0) {
    //         $location.path('/signin');
    //       } 
    //       else if (UserService.currentUser.isAdmin === false) {
    //         $location.path('/signin');
    //       }
    //       return ;
    //       /*else{
    //         $location.path('/signin');
    //       }*/
    //     }]
    //   }
    // })
    // .when('/signout', {
    //   templateUrl: 'views/signout.html',
    //   controller: 'UserCtrl'
    // })
    // .otherwise({
    //         'redirectTo' : '/'
    //     });

  .when('/admin', {
    templateUrl:'views/admin.view.html',
    controller: 'JobsCtrl',
    resolve: {
      'adminPermit': ['UserService','$location', function(UserService, $location){
        if(UserService.currentUser){
          $location.path('/signin')
        }
        else{
          $location.path('/')
        }
          if(UserService.currentUser.isAdmin === false){
            $location.path('/signin');
          }
          return ;
        }]
      }
    })
    .otherwise({
      'redirectTo' : '/'
    });
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
          // console.log(response);
            if(response.status === 401 || response.status === 403) {
                $location.path('/signin');
            return $q.reject(response);
            }
        }
    };
  }]);
}]);


