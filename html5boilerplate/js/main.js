//counter library

$(document).ready(function(){


  $("#data").on("keyup", function(){
    console.log(this.value);
    updateUI(this.value);
  });

var updateUI = function(text){
    var counts = Counter.count(text);
    $("#characters").text(counts.characters);
    $("#words").text(counts.words);
    $("#spaces").text(counts.spaces);
    $("#numbers").text(counts.numbers);
};

});
