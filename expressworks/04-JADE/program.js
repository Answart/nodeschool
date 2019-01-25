var express = require('express');
var app = express();
var path = require('path');

var portNum = process.argv[2];
var jadeFilePath = process.argv[3];

app.set('view engine', 'jade');
app.set('views', jadeFilePath || path.join(__dirname, 'templates'));

app.get('/home', function(req, res) {
  res.render('index', {
    date: new Date().toDateString()
  })
});

app.listen(portNum || 8000);

// node program.js 8000 './templates/index.jade' (dont do it - whitespaces)
// node program.js 8000 './templates/test.txt'
