var http = require('http');
var url = require('url');
let portNum = process.argv[2];


var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') { return res.end('send me a GET\n') };

  var parsedURL = url.parse(req.url, true);
  var pathname = parsedURL.pathname;
  var isoTime = parsedURL.query.iso;
  var timeString = Date.parse(isoTime);
  var data;

  if (pathname === '/api/parsetime') {
    let date = new Date(timeString);
    data = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };

  } else if (pathname === '/api/unixtime') {
    data = {
      "unixtime": timeString
    };
  }

  if (data) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end()
  }
}).listen(portNum);

// node program.js 8000
