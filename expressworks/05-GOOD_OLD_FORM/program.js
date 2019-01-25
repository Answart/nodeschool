var path = require('path');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var portNum = process.argv[2];

// MIDDLEWARE:
// Extended set to true (qs) or false (querystring) determines the parser module
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/form', function(req, res) {
  var body = req.body;
  var reversed = body.str.split('').reverse().join('');
  res.end(reversed);
});

app.listen(portNum || 8000);

// node program.js 8000
// localhost:8000/form
