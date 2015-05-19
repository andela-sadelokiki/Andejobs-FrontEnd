'use strict';
 
app.factory('UserService', ['$http', '$localStorage', function($http, $localStorage){
  var baseUrl = "http://localhost:3000/api";
  function changeUser(user) {
    angular.extend(User.currentUser, user);
  }

  function urlBase64Decode(str) {
      var output = str.replace('-', '+').replace('_', '/');
      switch (output.length % 4) {
          case 0:
              break;
          case 2:
              output += '==';
              break;
          case 3:
              output += '=';
              break;
          default:
              throw 'Illegal base64url string!';
      }
      return window.atob(output);
  }

  function getUserFromToken() {
      var token = $localStorage.token;
      var user = {};
      if (typeof token !== 'undefined') {
          var encoded = token.split('.')[1];
          user = JSON.parse(urlBase64Decode(encoded));
          console.log(user);
      }
      return user;
  }

  // var currentUser = getUserFromToken();

  var User = {
    save: function(data, success, error) {
      console.log(data);
      $http.post(baseUrl + '/users', data).success(success).error(error)
    },
    signin: function(data, success, error) {
      $http.post(baseUrl + '/authenticate', data).success(success).error(error)
    },
    logout: function(success) {
      changeUser({});
      delete $localStorage.token;
      success();
    },
    currentUser: getUserFromToken(),
    getUser: function(userId, success, error) {
      $http.get(baseUrl + '/users', userId).success(success).error(error)
    }
  }

  return User;
}]);
