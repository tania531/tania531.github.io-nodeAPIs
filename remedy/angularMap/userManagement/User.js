'use strict';

angular.module('users')
.factory('User', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){
  var fbUsers;
  var afUsers;

  function init(){
    fbUsers = $rootScope.fbRoot.child('users');
    afUsers = $firebaseArray(fbUsers);
    return afUsers;
  }

  function save(user){
    return afUsers.$save(user);
  }

  function add(user){
    return afUsers.$add(user);
  }

  function destroy(user){
    return afUsers.$remove(user);
  }

  return {add: add, init: init, destroy: destroy, save: save};
}]);