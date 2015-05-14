'use strict';

angular.module('jobs').controller('AndejobsCtrl', ['$scope','$rootScope', '$http','stateParams','$location', 'Authentication', 'jobs', 
    function($scope, $rootScope, $http, $stateParams, $location, Authentication, jobs){
        $scope.authentication = Authentication;
      //Powr
      $scope.postJob = function(){
        var job = new jobs({
          title: this.title,
          details: this.details,
          location: this.location,
          date_posted: this.date_posted,
          link: this.link
        });
        job.$save()
      }
    }])