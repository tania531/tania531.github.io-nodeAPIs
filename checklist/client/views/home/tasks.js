'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){

  Task.init(); // don't have to call every time add task

  console.info('am a task ocntroller');
  
  $scope.addTask = function(task){
    var o = {
      title: task.title,
      dueDate: task.dueDate.getTime(),
      priority: task.priority,
      isComplete: false,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };

    Task.add(o)
    .then(function(data){
      console.info('data', data);
    });
  };
}]);
