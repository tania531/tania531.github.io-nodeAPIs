var max = 0;
var words = ["hi", "there", "you", "rock"];
var lens = [];
var result = [];
for(var i = 0; i < words.length; i++){
    if(words[i].length > max){
        max = words[i].length;
        //console.log(words[i]);
    }

}

console.log('max: ', max);