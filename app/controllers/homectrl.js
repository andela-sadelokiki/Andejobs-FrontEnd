app.controller('HomeCtrl',function($scope, $http, $localStorage,$mdDialog, JobService, $location) {
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
    
    UserService.logout(function() {
      $location.path('/signout');
    }, function() {
      alert("Failed to logout!");
    });
  };

  $scope.token = $localStorage.token;

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