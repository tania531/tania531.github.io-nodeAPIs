var http = require('http');
var url = require('url');
var requests = require('request');
var exec = require("child_process").exec;

console.log(process);

exec("df -h", function(err, stdout, stderr){
  console.log(err, stdout, stderr);
});

http.createServer(function (request, response) {
    var queryData = url.parse(request.url, true).query;
    if(request.url === "/"){
      res.writeHead(200, {"Content-Type": "text/html"});
      fs.readFile('index.html', 'utf8',  )
    } else {
      requests("http://points.agilelabs.com/" + request.url + ".json", function (error, response2, body) {
        if (!error && response2.statusCode == 200) {
          response.writeHead(200, {"Content-Type": "application/json"});
          response.write(body);
          response.end();
        }
      });
    }

}).listen(8888);
