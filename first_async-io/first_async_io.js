var fs = require('fs')
var text = process.argv[2];

//Use asyncronous fs.readFile and find value from callback function
// Sample callback function:
//    function callback (err, data) { /* ... */ }

find_value = function(err, data) {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
}

fs.readFile(text, 'utf8', find_value);