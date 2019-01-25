var fs = require('fs');
var file = process.argv[2];
var newLines;


fs.readFile(file, 'utf8', function (err, data) {
  if (err) { throw err };
  newLines = data.split('\n').length - 1;
  processFile();
});

function processFile() {
  console.log(newLines);
}

// node program.js './tmp/hello.txt'
