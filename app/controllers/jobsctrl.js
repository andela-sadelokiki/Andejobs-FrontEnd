app.controller('JobsCtrl', function($scope, $timeout, JobService ){

  $scope.createJob = function(){
    console.log('I got to the controller');
    console.log($scope.job);
    JobService.create($scope.job);
  };

  $scope.allJobs = [];

  JobService.get(function (success) {
    console.log(success);
    $timeout(function () {
      $scope.allJobs = success;
      console.log($scope.allJobs);
      return $scope.allJobs;
    }, 500);
  }, function (err) {
    return err;
  });
});