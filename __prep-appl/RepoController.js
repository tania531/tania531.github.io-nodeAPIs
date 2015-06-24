(function(){
  var module = angular.module("githubUser");
  var RepoController = function ($scipe, $routeParams, github){
    var reponame = $routeParams.reponame;
    var username = $routeParams.username;
    
    var onRepo = function(data){
      
    };
    github.getRepoDetails(username, reponame)
      .then(onRepo, onError);
  };
})