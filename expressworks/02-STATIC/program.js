var path = require('path');
var express = require('express');
var app = express();
var portNum = process.argv[2];
var htmlFilePath = process.argv[3];

app.use(express.static(htmlFilePath || path.join(__dirname, 'public')))

app.listen(portNum || 8000);

// node program.js 8000 './public/index.html' (dont do it - whitespaces)
// node program.js 8000 './public/test.txt'
