var http = require('http');
var url = require('url');
var exec = require("child_process").exec;

console.log(process);

http.createServer(responseHandler).listen(8888);

function responseHandler(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
    if(req.url.match("fav")){
      res.end("");
      return;
    }
    exec("vm_stat", function(err, stdout, stderr){
      console.log(stdout.Pages);
      res.end(stdout.match(/free:\s+(\d+)\./)[1]);
    });
}
