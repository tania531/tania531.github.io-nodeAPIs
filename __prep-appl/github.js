var app = angular.module('app', []);
app.controller('githubViewer', function($scope, $http){
  var showUsers = function(){
    console.log("show click : ");
    $http.get("https://api.github.com/users/", function(response){
      console.log("response: ", response);
      $scope.data = response.data;
      // return response.data;
    });

  };


});
