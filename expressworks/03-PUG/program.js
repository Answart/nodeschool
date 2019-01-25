var express = require('express');
var app = express();
var path = require('path');

var portNum = process.argv[2];
var pugFilePath = process.argv[3];

app.set('view engine', 'pug');
app.set('views', pugFilePath || path.join(__dirname, 'templates'));

app.get('/home', function(req, res) {
  let newDate = new Date().toDateString();

  res.render('index', {
    date: newDate
  })
});

app.listen(portNum || 8000);

// node program.js 8000 './templates/index.pug' (dont do it - whitespaces)
// node program.js 8000 './templates/test.txt'
