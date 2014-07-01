//Now you have the full fs module available in a variable named fs.
var fs = require('fs')

//All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'. To read a file, you'll need to use fs.readFileSync('/path/to/file'). This method will return a Buffer object containing the complete contents of the file.
