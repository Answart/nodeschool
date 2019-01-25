var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var doc = {
  firstName: process.argv[2],
  lastName: process.argv[3]
}

mongo.connect(url, function(err, client) {
  if (err) { throw err };
  const db = client.db('learnyoumongo');
  const collection = db.collection('users');

  collection.insert(doc, function(err, result) {
    if (err) { throw err };

    // console.log('result', JSON.stringify(result.ops[0]));
    collection.findOne(doc, function(err, doc) {
      if (err) { throw err };

      console.log(JSON.stringify(doc));
      client.close();
    });
  });
})
