var $$ = {
  storeData: function() {
    localStorage["karma.data"] = JSON.stringify(this.data);
  },
  readData: function() {
    this.data = JSON.parse(localStorage["karma.data"]);
  },
  leaderboard: function() {
    return this.data.sort(this.compare);
  },
  compare: function (a, b){
    return b.points - a.points;
  },
  // modifyPointsFor(0, 2);
  modifyPointsFor: function(indexInArray, newPoints) {
    this.data[indexInArray].points = newPoints;
    this.storeData();
  },
  data: []
}

$(document).ready(function() {
  $$.readData();
  var sorted = $$.leaderboard();
  console.log(sorted);

  var oneOfYou = sorted[7];
  var $oneOfYou = $("ul li:first").clone().show();
  $oneOfYou.find(".name").text(oneOfYou.name);
  $oneOfYou.find(".points").text(oneOfYou.points);

  $("ul").append($oneOfYou);

  // var $body = $("body");
  // var divArray = [];
  // for (var i = 0; i < sorted.length; i++) {
  //   var $div = $("<div>");
  //   var $p = $("<p>");
  //   $p.text(sorted[i].name + ' ' + sorted[i].points);
  //   $div.append($p);
  //   divArray.push($div);
  // }
  // $body.append(divArray);
})
