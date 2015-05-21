app.controller('JobsCtrl', function($scope, $timeout, JobService ){

  $scope.createJob = function(){
    console.log('I got to the controller');
    console.log($scope.job);
    JobService.create($scope.job);
  };

  $scope.allJobs = [];

 $scope.submitApplication = function(){
  JobService.submit($scope.currentUser, function(){
    $location.path('/home');
  });
};

$scope.viewApplications = function(){
  JobService.view($scope.currentUser, function(){
    console.log(data);
    $location.path('/applications');
  });
};

$scope.applicants = function(){
  JobService.list($scope.currentUser, function(){
    console.log(data);
  });
};

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