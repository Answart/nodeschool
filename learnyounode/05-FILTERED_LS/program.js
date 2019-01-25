const fs = require('fs');
// const path = require('path');

let directoryName = process.argv[2];
let fileExtension = process.argv[3];


fs.readdir(directoryName, function (err, filePaths) {
  if (err) { throw err };

  for (let i=0; i<filePaths.length; i++) {
    if (isFileExtension(filePaths[i])) {
      console.log(filePaths[i]);
    };
  }
});

function isFileExtension(filePath) {
  let split = filePath.split('.');
  return split.length > 1 ? split.pop() === fileExtension : false;
}

// node program.js './tmp' 'txt'
