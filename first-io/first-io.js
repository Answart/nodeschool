// 1. Require 'fs'
//Now you have the full fs module available in a variable named fs.
var fs = require('fs')

// 2a. Create single synchronous function to read file
        //  fs.readFileSync(filename, [options])
        // Synchronous version of fs.readFile. Returns the contents of the filename.

readit = fs.readFileSync(process.argv[2]);
//process.argv[2] = 'first-io.js' from 'learnyounode verify first-io.js'

console.log(readit)
// reads file. (returns buffer object)
// Buffer Object: Node's way of representing arrays of data
// "<Buffer cf fa ed fe 07 00 00 01 03 00 00 80 02 00 00 00 14 00 00 00 e8 0a 00 00 85 80 01 00 00 00 00 00 19 00 00 00 48 00 00 00 5f 5f 50 41 47 45 5a 45 52 4f 00 ...>"