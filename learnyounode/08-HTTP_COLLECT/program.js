const http = require('http');
const bl = require('bl');

let url = process.argv[2];


http.get(url, function(res) {
  res.on('error', function(e) {
    console.log("Got error: " + e.message);
  });

  res.setEncoding('utf8');

  res.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length);
    console.log(data);
  }))
})

// node program.js 'http://www.google.com/index.html'
