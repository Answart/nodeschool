var path = require('path');
var express = require('express');
var app = express();

var portNum = process.argv[2];


app.get('/search', function(req, res) {
  res.send(req.query);
});

app.listen(portNum || 8000);

// node program.js 8000
// localhost:8000/search/?results=recent&include_tabs=true
