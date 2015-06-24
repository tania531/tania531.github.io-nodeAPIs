// console.log(this);
var hasVowel = function(string){
//   var strArr = string.split("");
  for (var i=0; i < string.length; i++){
    if (vowels.indexOf(string[i].toLowerCase())>=0){
      return true;
    }
     return false;
    
  }
  
};

var vowels = ['a','e','i','o','u'];

// var has = hasVowel("ggg");
// console.log("has: ", has);

console.log(hasVowel("test")); //true
console.log(hasVowel("234")); //false
console.log(hasVowel("ggg"));


