app.controller('UserCtrl', function($scope, $localStorage, UserService, $location,$timeout, $mdSidenav, $mdUtil, $log) {


  $scope.currentUser = UserService.currentUser;
  $scope.bar = "checking";

  $scope.signup = function() {
    UserService.save($scope.user, function(data) {
     $location.path('/home');
    }, function() {
        alert("Failed to logout!");
    });
  };

  $scope.signin = function() {
    $scope.bar = false;
    UserService.signin($scope.user, function(data) {
        console.log(data);
      if (data.success === false) {
        alert(data.success);
      } 
      else {
        $localStorage.token = data.token;
        if(data.isAdmin === true){
          console.log('this is an admin')
          $location.path('/admin');
          $scope.$apply();
        }
        else {
          console.log(data, 'is not admin')
          $location.path('/signedin');
        }
       
      }
    }, function(error) {
      console.log(error);
    });
  };

  $scope.signout = function() {
    console.log('You are signed out');
    UserService.logout(function() {
        $location.path('/signout');
    }, function() {
        alert("Failed to logout!");
    });
  };

  $scope.updateProfile = function(){
    UserService.update($scope.currentUser, function(data){
      $location.path('/signedin');
      console.log('data: ', data)
      
    });
  };

  $scope.deleteUser = function(){
    UserService.delete($scope.currentUser, function(){
      $location.path('/home');
    });
  };

 

  // $scope.listApplication = function(){

  // }

  

 /* $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },300);

      return debounceFn;
    }
*/
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })

