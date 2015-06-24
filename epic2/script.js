// Code goes here
$(document).ready(function(){
  var word = 'happy';
  word = word.split("");
  var userChoice = $('#userLetter').val();
  var blanks = [];
  word.forEach(function(w, i){
    blanks.push(" _ ");
    blanks[i] = w[i];
    if(userChoice === w){
      blanks[i] = userChoice;
    }
    console.log(' blanks: ', blanks);
    $("#blanksDisplay").html(blanks);
  });

  for(var i = 0; i < word.length; i++){
    $("#wordDisplay").append("___    ");
  }

  for(var i = 0; i < word.length; i++){
    $("#figureDrawing").append("_____");
  }



  // var canvas = $('#figureDrawing');
  // var context = canvas.getContext('2d');

  // context.beginPath();
  // context.moveTo(100, 150);
  // context.lineTo(450, 50);
  // context.stroke();
});
