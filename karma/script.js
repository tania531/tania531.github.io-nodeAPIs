var data;

var storeData = function(array) {
  localStorage["karma.data"] = JSON.stringify(array);
}

var readData = function() {
  data = JSON.parse(localStorage["karma.data"]);
}

// modifyPointsFor(0, 2);

var leaderboard = function(data) {
  return data.sort(compare);
}

$(document).ready(function() {
  readData();
  var sorted = leaderboard(data);
  var $body = $("body");
  var divArray = [];
  for (var i = 0; i < sorted.length; i++) {
    var $div = $("<div>");
    var $p = $("<p>");
    $p.text(sorted[i].name + ' ' + sorted[i].points);
    $div.append($p);
    divArray.push($div);
  }
  $body.append(divArray);
})

function compare(a, b){
  return b.points - a.points;
}
