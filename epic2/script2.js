// Code goes here
$(document).ready(function(){
  var word = 'happy';
  word = word.split("");
  console.log(' word: ', word);
  var userLetter;
  // var userChoice = prompt("Please enter your choice", "");
  var blanks = [];
  var wrongs = [];
  var match = '';
  var mismatch = '';
  $("button").click(function(){
    word.forEach(function(w, i){
      userLetter = $('#userLetter').val()
      console.log(' userLetter ', userLetter);
      // blanks.push(" _ ");
      // blanks[i] = w[i];
      if(userLetter === w){
        // to fix: goes to both arrays
        match = userLetter;
        blanks[i] = userLetter;
        blanks.push(match);
      } else {
        //better
        mismatch = userLetter;
        wrongs.push(mismatch);
      }
      $("#blanksDisplay").html(blanks);
    var matches = [];
    // matches = word.reduce(function(acc, curr, i, arr){
    //   userLetter = $('#userLetter').val();
    //   console.log(' userLetter ', userLetter);
    //   return userLetter === curr;
    //   // if(userLetter === w){
    //   //   match = userLetter;
    //   //   blanks[i] = userLetter;
    //   //   blanks.push(match);
    //   // } else {
    //   //   mismatch = userLetter;
    //   //   wrongs.push(mismatch);
    //   // }
    //   $("#blanksDisplay").html(blanks);

    });
    // console.log(' matches ', matches);
    $("#lettersDisplay").html("Letters: " + wrongs);
  });


  for(var i = 0; i < word.length; i++){
    $("#wordDisplay").append("___    ");
  }

  for(var i = 0; i < word.length; i++){
    $("#figureDrawing").append("_____");
  }

});
