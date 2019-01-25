var path = require('path');
var express = require('express');
var app = express();
var fs = require('fs');

var portNum = process.argv[2];
var fileName = process.argv[3];


app.get('/books', function(req, res) {

  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) { res.send(500) };
    try {
      var books = JSON.parse(data);
    } catch (err) {
      res.send(500);
    }
    res.json(books);
  });
});

app.listen(portNum || 8000);

// node program.js 8000 './books.txt'
// node program.js 8000 './books.json'
// localhost:8000/books
