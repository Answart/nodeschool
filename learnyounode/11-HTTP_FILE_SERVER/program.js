var http = require('http');
var fs = require('fs');
let portNum = process.argv[2];
let file = process.argv[3];


var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(file).pipe(res);
})

// node program.js 8000 './tmp/hello.txt'

server.listen(portNum);
