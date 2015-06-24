// Code goes here
$(document).ready(function() {
  var data = [{
    name: 'Ryan',
    points: 14
  }, {
    name: 'Colin',
    points: 7
  }, {
    name: 'Tania',
    points: 8
  }, {
    name: 'Colin',
    points: 21
  }];
  var board = $("#leaderboard");

  data = data.sort(function(a,b){  
    return b.points - a.points;
  });
  data.forEach(function(d){
    for(k in d){
      $("#leaderboard").append("<tr><td>user name: " + 
        d.name + " points: " + d.points + "</td></tr>");
    }    
  });
  console.log("data: ", data);
});