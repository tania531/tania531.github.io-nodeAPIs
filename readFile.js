var fs = require('fs');
var dir = '/Users/tania';
fs.readdir(dir, function(err, result){
  console.log( dir.size);
}

