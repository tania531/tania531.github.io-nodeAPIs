'use strict';

angular.module('users', ['firebase'])
.run(['$rootScope', '$window', function($rootScope, $window){
  $rootScope.fbRoot = new $window.Firebase('https://user-mangement.firebaseio.com/');
}])
.controller('UserCtrl', ['$scope', 'User', '$window', '$firebaseObject', '$firebaseArray', function($scope, User, $window, $firebaseObject, $firebaseArray){

	$scope.afUsers = User.init();

	// $scope.addUser = function(){
	// 	console.log('$scope.newUser: ', $scope.newUser);
	// 	if($scope.newUser.notes.length === 0){
	// 		$scope.newUser.notes = $scope.newUser.notes;
	// 	}else {
	// 		$scope.newUser.notes = $scope.newUser.notes.split(',');
	// 	}
	// 	// $scope.newUser.notes = $scope.newUser.notes.split(',');
	// 	$scope.users.push($scope.newUser);
	// 	$('#myModal').modal('hide');
	// };

	$scope.getNotes = function(user, index){
		$scope.activeRow = index;
		$scope.user = user;
	};

	$scope.isActive = function(index){
		return $scope.activeRow === index;
	};

 	$scope.hasNoNotes = function(user){
 		return user.notes.length === 0 ? true : false;
 	};

 	$scope.sort = function(sortString){
	    var modifier = ($scope.taskOrder === sortString) ? '-' : '';
	    $scope.taskOrder = modifier + sortString;
	    // debugger;
	};
 	// $scope.numNotes = function(user){
 	// 	console.log('user.notes.length', user.notes.length);

 	// 	return user.notes.length;
 	// };
 	// $scope.displayNotes = function(note){
 	// 	var noteObj = {content:note.content, date:note.date};
 	// 	return noteObj.content;
 	// };
 	$scope.deleteUser = function(user){
 		User.destroy(user);
 	};

 	$scope.addNewNotes = function(notes){
		notes.date = notes.date.getTime();
 		$scope.user.notes.push(notes);
 		User.save($scope.user);
 		$scope.notes = null;
	};

 	$scope.addNewUser = function(newUser){
	    var o = {
	      name: newUser.name,
	      email: newUser.name,
	      phone: newUser.name,
	      name: newUser.name,
	      // if(notes ==== ''){
	      	
	      // }
	      notes: [{content:newUser.notes, date:$window.Firebase.ServerValue.TIMESTAMP}],
	      isActive: false,
	      createdAt: $window.Firebase.ServerValue.TIMESTAMP
	    };

	    User.add(o)
	    .then(function(){
	      $scope.newUser = {};
	    });
	    $('#myModal').modal('hide');
    };
}]);

