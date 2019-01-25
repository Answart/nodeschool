// 1. Require 'fs'
//Now you have the full fs module available in a variable named fs.
var fs = require('fs');
// 2a. Create single synchronous function to read file
//    fs.readFileSync(filename, [options])
//   Synchronous version of fs.readFile. Returns the contents of the filename.
var file = process.argv[2];
var stringifiedBuffer;
var newLines;

// buffer = fs.readFileSync(file);
// stringified = buffer.toString();
stringifiedBuffer = fs.readFileSync(file, 'utf8');
//process.argv[2] = 'first-io.js' from 'learnyounode verify first-io.js'

// 2b. Print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
//         buf.toString([encoding], [start], [end])#
//             'encoding' String, Optional, Default: 'utf8'
//             'start' Number, Optional, Default: 0
//             'end' Number, Optional, Default: buffer.length
//         Decodes and returns a string from buffer data encoded with encoding (defaults to 'utf8') beginning at start (defaults to 0) and ending at end (defaults to buffer.length).
newLines = stringifiedBuffer.split('\n').length - 1;
console.log(newLines);

// node program.js './tmp/hello.txt'


// NOTES

// - fs.readFileSync(filename, [options])
//       reads file. (returns buffer object)
//       Buffer Object: Node's way of representing arrays of data
//       "<Buffer cf fa ed fe 07 00 00 01 03 00 00 80 02 00 00 00 14 00 00 00 e8 0a 00 00 85 80 01 00 00 00 00 00 19 00 00 00 48 00 00 00 5f 5f 50 41 47 45 5a 45 52 4f 00 ...>"
// passing 'utf8' in .readFileSync transfers Buffer Object to String
//     fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
