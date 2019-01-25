var net = require('net');
var strftime = require('strftime')
let portNum = process.argv[2];


var server = net.createServer(function (socket) {
  let data = strftime('%F %H:%M') + '\n';
  socket.end(data);
});

server.listen(portNum);
