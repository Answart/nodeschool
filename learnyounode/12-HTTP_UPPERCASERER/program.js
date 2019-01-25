var http = require('http');
var map = require('through2-map');
let portNum = process.argv[2];


var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') { return res.end('send me a POST\n') };

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
})

// node program.js 8000

server.listen(portNum);
