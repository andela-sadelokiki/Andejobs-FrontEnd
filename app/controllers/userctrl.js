app.controller('UserCtrl', function($scope, $localStorage, UserService, $location) {

  $scope.signup = function() {
    UserService.save($scope.user, function(data) {
     $location.path('/signedin');
    }, function() {
        alert("Failed to logout!");
    });
  };

  $scope.signin = function() {
    UserService.signin($scope.user, function(data) {
    console.log('data');
    if(UserService.createUser.isAdmin) {
        $location.path('/admin');
      }
      if (data.success === false) {
        alert(data.success);
      } 
      else {
        console.log(data);
        $localStorage.token = data.token;
        $location.path('/jobs');
      }
    }, function(error) {
      console.log(error);
    });
  };

 // $scope.signout = function() {
 //    // console.log('you just clicked the signout button');
    
 //    UserService.logout(function() {
 //      // console.log('You are signed out');
 //      $location.path('/signout');
 //    }, function() {
 //      alert("Failed to logout!");
 //    });
 //  };

});
