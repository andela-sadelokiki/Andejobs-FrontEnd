app.controller('HomeCtrl', function($scope, $http, $localStorage,$mdDialog, UserService, JobService, $location) {
  $scope.alert = '';
  $scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .title('Application Status')
        .content('Your application has been successfully submitted')
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')
        .targetEvent(ev)
    );
  }

  $scope.signout = function() {
    // console.log('you just clicked the signout button');
    
    UserService.logout(function() {
      // console.log('You are signed out');
      $location.path('/signout');
    }, function() {
      alert("Failed to logout!");
    });
  };

  $scope.token = $localStorage.token;

  // var imagePath = 'https://material.angularjs.org/img/list/60.jpeg';
  // var date = new Date();
  // $scope.jobs = [{
  //   title: 'Software Developer',
  //   location: 'Lagos, Nigeria',
  //   description: "Do you have what it takes to become a world-class developer? If so, consider applying. The Andela Fellowship is a paid opportunity to work with some of the world’s leading technology companies. We are currently accepting applications at our campus in Lagos, Nigeria.",
  //   closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7))
  // }, {
  //   title: 'Technical Recruiter',
  //   location: 'Lagos, Nigeria',
  //   description: 'The technical recruiter is responsible for sourcing, recruiting, and screening applicants for a variety of technical positions, including software engineers, system administrators, computer programmers, and database administrators.',
  //   closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) 
  // }, {
  //   title: 'Product Designer',
  //   location: 'Lagos, Nigeria',
  //   description:'Industrial designers work from design briefs to create design solutions for new products that are innovative, practical and suitable.',
  //   closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) 
  // }, {
  //   title: 'Documentarian',
  //   location: 'Lagos, Nigeria',
  //   description: 'The Documentarian is the primary organizer and overseer of visually recording (photo and video) chapter events and experiences for the purposes of documenting history and creating publicity materials',
  //   closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) 
  // }, {
  //   title: 'Operations',
  //   location: 'Lagos, Nigeria',
  //   description: '',
  //   closing_date: "Application deadline: " + date.toString(date.setDate(date.getDate() + 7)) ,
  // }];

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