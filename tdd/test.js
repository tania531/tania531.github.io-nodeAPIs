var assertEqual = function(actual, expected) {
  console.log(actual === expected ? "PASS" : "FAIL");
};

var assertArrayEqual = function(actual, expected) {
  console.log(JSON.stringify(actual) === JSON.stringify(expected) ? "PASS" : "FAIL");
};

function reduceSum(t, n) { return t + parseInt(n, 10); }

// var splitSum = function(message, splitter) {
//   return message.split(splitter).reduce(reduceSum, 0);
// };

// assertEqual(splitSum("3:4:5:1", ":"), 13);
// assertEqual(splitSum("-1$-5$5$-4", "$"), -5);
//


// var argsSum = function() {
//   return Array.prototype.reduce.call(arguments, reduceSum);
// }

// assertEqual(argsSum(3,7,8), 18);
// assertEqual(argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1), 14);

// function createArrayFromAtoB(start, end) {
//   var array = [];
//   for(var i = start; i <= end; i++){
//     array.push(i);
//   }
//   return array;
// };

// assertArrayEqual(createArrayFromAtoB(4,9), [4,5,6,7,8,9]);
// assertArrayEqual(createArrayFromAtoB(0, 3), [-1,0,1,2,3]);
