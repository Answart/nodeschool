var fs = require('fs')

//Use asyncronous fs.readFile and find value from callback function
// Sample callback function:
//    function callback (err, data) { /* ... */ }

readit = fs.readFile(process.argv[2], 'utf8')

console.log(readit)