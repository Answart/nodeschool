const myModule = require('./myfirstmodule');

let directoryName = process.argv[2];
let fileExtension = process.argv[3];


myModule(directoryName, fileExtension, (err, list) => {
  if (err) { return console.log(err) };

  for (let i=0; i<list.length; i++) {
    console.log(list[i]);
  }
});

// node program.js './tmp' 'txt'
