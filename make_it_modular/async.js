var fs = require('fs');
var directory = process.argv[2];
var file_extension = '.' + process.argv[3];
var filter = require('./mymodule.js')

// mymodule.module();

filter(directory, file_extension, function(err, list) {
    if (err) {
        console.log('A file failed to process');
    } else list.forEach(function (file) {
        console.log(file);
    })
});