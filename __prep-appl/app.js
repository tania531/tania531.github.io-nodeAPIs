(function(){
  var app = angular.module("githubViewer", ['ngRoute']);
  app.config(function(){
    $routeProvider
      .when("/main", {
        templateUrl:"main.html",
        controller:"MainController"
      })
      .when("/user/:username", {
        templateUrl:"user.html",
        controller:"UserController.js"
      })
      when("/user/repos", {
        
      })
      .otherwise({redirectTo:"/main"});
  });
}());