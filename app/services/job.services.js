var app = angular.module("Andejobs");
app.factory('JobService',['$http','$localStorage', function($http, $localStorage){
    
  return{
    get: function(){
      return $http.get('https://cryptic-wildwood-7014.herokuapp.com/api/v1/jobs');
    },

    create: function(data){
      return $http.post('https://cryptic-wildwood-7014.herokuapp.com/api/v1/jobs', data);
    },

    delete: function(id){
      return $http.delete('https://cryptic-wildwood-7014.herokuapp.com/api/v1/jobs' + id);
    }
  }
}]);