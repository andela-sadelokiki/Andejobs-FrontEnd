app.controller('ApplicationsCtrl', function($scope, ApplicationService){
  $scope.submitApplication = function(){
    ApplicationService.submit($scope.application);
  };

  $scope.allApplications = []
})