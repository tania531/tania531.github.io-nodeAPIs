console.log('hello world');

var a = 2;

var b = 3;

var c = 4;

console.log(a,b,c);

var nums = [4,2,5];

var sum = nums.reduce(function(prev, curr){
  return prev + curr;
});
