var fs = require('fs');
var path = require('path');
var async = require("async");

//====
// fs.readdir(directory, print_filenames);

// function print_filenames(err, data) {
//   async.each(data, function(file, cb) {
//     if (path.extname(file) == file_extension)
//       { console.log(file) }
//     else
//       { cb(null, data) }
//   });
// }

//======


function filter(directory, file_extension, cb1) {
  fs.readdir(directory, function(err, data) {
    var filteredList = [];
    if (err) 
      { return cb1(err) }

    data.forEach(function (file) {
      if (path.extname(file) === file_extension) {
        filteredList.push(file);
      }
    })

    //asynchronous filter work
    // async.each(data, function(file, cb2) {
    //   if (path.extname(file) == file_extension) {
    //     filteredList.push(file);
    //     // console.log(file)
    //   } else {
    //     cb2()
    //   }
    cb1(null, filteredList);
  })
}

module.exports = filter;
//=======
    // function bar (callback) {
    //   foo(function (err, data) {
    //     if (err)
    //       return callback(err) // early return

    //     // ... no error, continue doing cool things with `data`

    //     // all went well, call callback with `null` for the error argument

    //     callback(null, data)
    //   })
    // }

// function start() {
//   function onRequest(request, response) {
//     console.log("Request received.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;