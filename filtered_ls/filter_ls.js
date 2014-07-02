var fs = require('fs');
var path = require('path');
var async = require("async");
var directory = process.argv[2];
var file_extension = '.' + process.argv[3];

// fs.readdir(path, callback)
//Asynchronous readdir(3). Reads the contents of a directory.
//The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.


//INITIAL CODE
// fs.readdir(directory, print_filenames);

// function print_filenames(err, data) {
//   async.each(data, function(file, cb) {
//     if (path.extname(file) == file_extension) {
//       console.log(file)
//     } else {
//     cb();
//     }
//   }, function(err){
//     // if any of the file processing produced an error, err would equal that error
//     if( err ) {
//       console.log('A file failed to process');
//     } else {
//       console.log('All files have been processed successfully');
//     }
//   });
// }

//REFACTORED
fs.readdir(directory, print_filenames);

function print_filenames(err, data) {
  async.each(data, function(file, cb) {
    if (path.extname(file) == file_extension)
      { console.log(file) }
    else
      { cb() }
  });
}

//ANSWER
    // var fs = require('fs')
    // var path = require('path')

    // fs.readdir(process.argv[2], function (err, list) {
    //   list.forEach(function (file) {
    //     if (path.extname(file) === '.' + process.argv[3])
    //       console.log(file)
    //   })
    // })