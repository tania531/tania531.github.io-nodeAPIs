'use strict';

angular.module('checklist')
.controller('NavCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
    } else {
      $state.go('home');
    }
  });

  $scope.logout = function(){
      console.log('yes I logged out');
      User.logout();
  };
}]);
