var leaderboard = function(data) {
  return data.sort(compare);
}

$(document).ready(function() {
  $.ajax("data.json").success(function(response) {
    console.log(response);
  }).error(function(x, text, error) {
    console.error(x, text, error);
  });
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
