const http = require('http');

let url = process.argv[2];


http.get(url, function(res) {
  res.on('error', function(e) {
    console.log("Got error: " + e.message);
  });

  res.setEncoding('utf8');

  res.on('data', function (chunk) {
    console.log(chunk);
  });
})

// node program.js 'http://www.google.com/index.html'
