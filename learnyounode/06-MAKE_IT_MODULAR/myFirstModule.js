const fs = require('fs');
const path = require('path');

module.exports = function (directoryName, fileExtension, cb) {
  if (!directoryName) { return cb(err) };

  fs.readdir(directoryName, function (err, filePaths) {
    if (err) { return cb(err) };
    if (!filePaths) { return cb(err) };

    let list = filePaths.filter(function (file) {
      return path.extname(file) === '.' + fileExtension;
    })

    return cb(null, list);
  });
};
