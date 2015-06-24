result = argsSum(3,7,8);
console.log(result); // 18
result = argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
console.log(result); // 14


var assertEqual = function(actual, expected){
  console.log(actual === expected ? 'PASS' : 'FAIL');
}

assertEqual(argsSum(3,7,8),18);

function argsSum(input){
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
        // console.log(arguments[i]);
        // console.log('total', total);
    }
    return total;
  // console.log('input', input);
}

var argsSum = function(){
  return Array.prototype.reduce.apply(arguments, reduceSum);
}
