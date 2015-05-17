// var app = angular.module("Andejobs");
app.factory('JobService',['$http','$localStorage', function($http, $localStorage){

  var jobUrl = "http://localhost:3000/api/v1/jobs";
  // var jobUrl = "https://cryptic-wildwood-7014.herokuapp.com/api/v1/jobs";
    
  return{
    get: function(success, error){
      return $http.get(jobUrl).success(success).error(error);
    },

    create: function(data, success,error){
      return $http.post(jobUrl, data).success(success).error(error);
    },

    delete: function(id, success,error){
      return $http.delete(jobUrl + id).success(success).error(error);
    }
  }
}]);