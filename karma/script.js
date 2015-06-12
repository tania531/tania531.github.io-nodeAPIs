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
  data: [],
<<<<<<< HEAD
  forceGet: true
}
=======
  forceGet : true
};
>>>>>>> 779d27a7e88a9860a1009968c5da0856ce654152


$(document).ready(function() {
  $$.readData();
  var sorted = $$.leaderboard();

  console.log("sorted: ", sorted);

    var $template = $(".person:first"), $clonedLi;
    var ppl = sorted.map(function(p, i) {
      $clonedLi = $template.clone().show();
      $clonedLi.data("order", i);
      $clonedLi.find(".name").text(p.name);
      $clonedLi.find(".points").text(p.points);
      $clonedLi.find("input").val(p.points);
      return $clonedLi;
    });

  $("#ppl").append(ppl);

  $("#ppl")
  .on("dblclick", ".points", function() {
<<<<<<< HEAD
    $(this).css("display", "none");
    $(this).next().show();
  })
  .on("keyup", "input", function(event) {
    if (event.which === 13) {
      var person = $(this).parents(".person");
      var personIndex = person.data("order");
      var newVal = $(this).val();
      $$.modifyPointsFor(personIndex, newVal);
      $$.storeData($$.data);
      location.reload($$.forceGet);
      $(this).hide();
      $(".points").show();
=======
    var person = $(this).parents(".person");
    console.log($(this));

    $(this).closest(".person").find(".points").hide();
    $(this).closest(".person").find(".input").removeClass("hidden");
    $(this).closest("input").show();

  })
  .on("keyup", "input", function(event) {
    if (event.which === 13) {
      console.log($(this).val());
      $(this).closest(".person").find(".points").html($(this).val());
      $(this).closest(".person").find(".points").show();
      $(this).closest(".person").find(".input").addClass("hidden");
      var person = $(this).parents(".person");
      var index = person.data("order");
      console.log("person: ", person);
      $$.modifyPointsFor(index, $(this).val());
      location.reload($$.forceGet);
>>>>>>> 779d27a7e88a9860a1009968c5da0856ce654152
    }
  });

});
