var path = require('path');
var express = require('express');
var app = express();

var portNum = process.argv[2];
var filePath = process.argv[3];

// MIDDLEWARE:
// middleware for .styl
app.use(require('stylus').middleware(filePath || path.join(__dirname, 'public')));
// middleware for .html
app.use(express.static(filePath || path.join(__dirname, 'public')))


app.listen(portNum || 8000);

// node program.js 8000 './public/main.styl'
// localhost:8000/form
