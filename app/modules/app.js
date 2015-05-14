var app = angular.module('Andejobs', ['ngMaterial','ngRoute']);


app.controller('AndejobsCtrl', ['$scope', function($scope){

  }]);
app.controller('AndejobsCtrl', function($scope) {
    var imagePath = 'https://material.angularjs.org/img/list/60.jpeg';
    var date = new Date();
    $scope.jobs = [{
      title: 'Software Developer',
      location: 'Lagos, Nigeria',
      description: "Do you have what it takes to become a world-class developer? If so, consider applying. The Andela Fellowship is a paid opportunity to work with some of the world’s leading technology companies. We are currently accepting applications at our campus in Lagos, Nigeria.",
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7))
    }, {
      title: 'Technical Recruiter',
      location: 'Lagos, Nigeria',
      description: 'The technical recruiter is responsible for sourcing, recruiting, and screening applicants for a variety of technical positions, including software engineers, system administrators, computer programmers, and database administrators.',
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) 
    }, {
      title: 'Product Designer',
      location: 'Lagos, Nigeria',
      description:'Industrial designers work from design briefs to create design solutions for new products that are innovative, practical and suitable.',
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) 
    }, {
      title: 'Documentarian',
      location: 'Lagos, Nigeria',
      description: 'The Documentarian is the primary organizer and overseer of visually recording (photo and video) chapter events and experiences for the purposes of documenting history and creating publicity materials',
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) 
    }, {
      title: 'Operations',
      location: 'Lagos, Nigeria',
      description: '',
      closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) ,
    }];
     $scope.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };
  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };
    $scope.showCustomToast = function() {
    $mdToast.show({
      controller: 'AndejobsCtrl',
      templateUrl: 'toast-template.html',
      hideDelay: 6000,
      position: $scope.getToastPosition()
    });
  };
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
    .when('/submit',{
      templateUrl:'views/submit.view.html',
      controller:'AndejobsCtrl'
    })

}])



 
// }]);