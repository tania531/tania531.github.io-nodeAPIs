
// Takes 2 arguments
//--------------------------------------------------------
result = createArrayFromAtoB(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]
result = createArrayFromAtoB(-1, 3);
console.log(result); // [-1, 0, 1, 2, 3]

var result = createArrayFromAtoB(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]

function createArrayFromAtoB(start, end){
  var array = [];

  for (var i = start; i <= end; i++){
    array.push(i);
  }
  return array;
}


var assertEqual = function(actual, expected){
  console.log(actual === expected ? 'PASS' : 'FAIL');
}

var assertEqualArrays = function(actual, expected){
// actual = Array.prototype.slice.call(arguments);
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);
console.log('actual: ',actual);
console.log('expected: ', expected);
console.log(actual === expected ? 'PASS' : 'FAIL');
  
}

assertEqualArrays(createArrayFromAtoB(4, 9),[4, 5, 6, 7, 8, 9]);

assertEqualArrays(createArrayFromAtoB(-1, 3),[-1, 0, 1, 2, 3]);
