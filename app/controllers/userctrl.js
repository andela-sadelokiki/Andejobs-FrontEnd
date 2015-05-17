app.controller('UserCtrl', function($scope, $localStorage, UserService, $location) {

  $scope.signup = function() {
    UserService.save($scope.user, function(data) {
      console.log('data: ', data);
    });
  };

  $scope.signin = function() {
    UserService.signin($scope.user, function(data) {
      if (data.success === false) {
        alert(data.success);
      } else {
        console.log(data);
        $localStorage.token = data.token;
        $location.path('/jobs');
      }
    }, function(error) {
      console.log(error);
    });
  };

  $scope.signout = function() {
    UserService.logout(function() {
        $location.path('/signout');
    }, function() {
        alert("Failed to logout!");
    });
  };

});
