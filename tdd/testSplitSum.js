

var asserEqual = function(actual, expected){
  console.log(actual === expected ? 'PASS' : 'FAIL');
}


var splitSum = function(message, splitter){
  function reduceSum(t,n){ return t + Number(n);}

 console.log(message.split(splitter).map(Number));
 return message.split(splitter).reduce(reduceSum, 0);
}

result = splitSum("3:4:5:1", ":");
console.log(result); // 13
result = splitSum("-1$-5$5$-4", "$");
console.log(result); // -5
