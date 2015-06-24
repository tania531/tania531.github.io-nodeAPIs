

angular.module('inventory')
.factory('Room', ['$rootScope', function($rootScope){
  var rooms = {};

  //constructor
  function Room(){

  }

  Room.items = ['chairs', 'tables', 'rugs'];

  function save(room){
    return rooms.$save(room);
  }

  return Room;

}]);
