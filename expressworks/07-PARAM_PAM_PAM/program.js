var path = require('path');
var express = require('express');
var app = express();

var portNum = process.argv[2];


app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  var crypto = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');
  res.end(crypto);
});

app.listen(portNum || 8000);

// node program.js 8000
// localhost:8000/message/526aa677a8ceb64569c9d4fb
