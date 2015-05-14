var app = angular.module('Andejobs', ['ngMaterial','ngRoute']);


app.controller('AndejobsCtrl', ['$scope', function($scope){

  }]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl:'views/home.view.html',
      controller:'AndejobsCtrl'
    })
    .when('/signin',{
    templateUrl:'views/signin.view.html',
    controller:'AndejobsCtrl'
    })
    .when('/signup',{
    templateUrl:'views/signup.view.html',
    controller:'AndejobsCtrl'
    })

}])



 
// }]);