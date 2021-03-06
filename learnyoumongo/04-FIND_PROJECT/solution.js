var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2], 10);

mongo.connect(url, function(err, client) {
  if (err) { throw err };
  const db = client.db('learnyoumongo');

  db.collection('parrots').find(
    { age: { $gt: +age }}
  ).project(
    { name: 1, age: 1, _id: 0 }
  ).toArray(function(err, docs) {
    if (err) { throw err };

    console.log(docs);
    client.close();
  })
})
