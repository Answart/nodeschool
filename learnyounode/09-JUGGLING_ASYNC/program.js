const http = require('http');
const bl = require('bl');
const async = require('async');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

function getHTTP(url, cb) {
  http.get(url, function(res) {
    res.on('error', function(e) {
      console.log("Got error: " + e.message);
    });
    res.setEncoding('utf8');

    let response = '';
    res.pipe(bl(function (err, data) {
      if (err) { return console.error(err) };

      response += data;
    }))

    res.on('end', function() {
      return cb(null, response.replace(/\n/g, ''));
    })
  });
}

async.series([
  function(cb) { getHTTP(url1, cb) },
  function(cb) { getHTTP(url2, cb) },
  function(cb) { getHTTP(url3, cb) },
], function (err, results) {
  if (err) { return console.log('ERROR:', err) };
  printResults(results);
});

function printResults(results) {
  for (let i=0; i<results.length; i++) {
    console.log(results[i]);
  }
}

// node program.js 'http://www.google.com/index.html' 'http://www.google.com/index.html' 'http://www.google.com/index.html'
