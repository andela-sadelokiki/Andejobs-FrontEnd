var app = angular.module('Andejobs', ['ngMaterial','ngRoute']);


app.controller('AndejobsCtrl', ['$scope', function($scope){

  }]);
app.controller('AndejobsCtrl', function($scope) {
    var imagePath = 'https://material.angularjs.org/img/list/60.jpeg';
    var date = new Date();
    $scope.jobs = [{
      title: 'Software Developer',
      location: 'Lagos, Nigeria',
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) ,
    }, {
      title: 'Technical Recruiter',
      location: 'Lagos, Nigeria',
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) ,
    }, {
      title: 'Product Designer',
      location: 'Lagos, Nigeria',
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) ,
    }, {
      title: 'Documentarian',
      location: 'Lagos, Nigeria',
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) ,
    }, {
      title: 'Operations',
      location: 'Lagos, Nigeria',
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) ,
    }];
  });

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
    .when('/jobs',{
      templateUrl:'views/jobs.view.html',
      controller:'AndejobsCtrl'
    })

}])



 
// }]);