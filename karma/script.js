var data = [
  { "name": "Sheryl Boughton", "points": 1 },
  { "name": "Tania Leonian", "points": 1 },
  { "name": "Loren Barrick", "points": 3 },
  { "name": "Stanley Liu", "points": 0 },
  { "name": "Ryan Taylor", "points": 0 },
  { "name": "Son Truong", "points": 1 },
  { "name": "Michael Sankovich", "points": 0 },
  { "name": "Gerald Anekwe", "points": 2 },
  { "name": "Juan Barragan", "points": 1 },
  { "name": "Troy Wood", "points": 0 },
  { "name": "Bonnie So", "points": 0 },
  { "name": "Collin Webb", "points": 2 },
  { "name": "Elijah Olegnowicz", "points": 0 },
  { "name": "Trey Huffine", "points": 1 },
  { "name": "Sean Blattenberger", "points": 0 },
  { "name": "Dan Ward", "points": 1 },
  { "name": "Aliou Maiga", "points": 0 },
  { "name": "Javier Escobar", "points": 2 },
  { "name": "Perrin Clark", "points": 1 }
];

var leaderboard = function(data) {
  return data.sort(compare);
}

$(document).ready(function() {
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
