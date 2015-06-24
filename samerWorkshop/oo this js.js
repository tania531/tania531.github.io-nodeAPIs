// Code goes here

Object.prototype.values = function(){
	var self = this;
	return Object.keys(self).map(function(key){

		return self[key];
	});
};

// Object.prototype.values = function(){
// // 	var self = this;
// 	return Object.keys(this).map(function(key){

// 		return this[key];
// 	});
// };


console.log({ z: 12, g: 0, p: -1 }.values()); // [12, 0, -1]