// Code goes here
var app = angular.module('app', []);
//controler alow pag manip
app.controller('MainController', function($scope, $http, $routeParams){
var onUserComplete = function(response){
  $scope.user = response.data;
  $http.get($scope.user.repos_url)
    .then(onRepos, onError);
};

var onRepos = function(response){
  $scope.repos = response.data;
}
var onError = function(response){
  $scope.error = "couldn't get reply";
};

var decrementCountdown = function(){
  $scope.countown = 1;
  if($scope.countdown < 1){
    $scope.search($scope.username);
  }
};
var countdownInterval = null;
$scope.search = function(username){
  $http.get("https://api.github.com/users/"+username)
    .then(onUserComplete, onError);
};

var startCountdown = function(){
  $interval(decrementCountdown, 1000, $scope.countDown )
}
$scope.username = "angular";
$scope.message = "Github Viewer";
$scope.repoSortOrder = "+name";
github.getUser($scope.username).then(onUserComplete, onError)
  
});



