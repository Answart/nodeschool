var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2] || 'learnyoumongo';
var url = 'mongodb://localhost:27017/' + dbName;
var doc = {
  "name": "Tina",
  "age": 30,
  "username": "tinatime"
}

mongo.connect(url, function(err, client) {
  if (err) { throw err };
  const db = client.db('learnyoumongo');
  const collection = db.collection('users');

  collection.update(
    doc,
    { $set: { age: 40 }},
    function(err, result) {
      if (err) { throw err };

      collection.findOne(doc, function(err, doc) {
        if (err) { throw err };

        console.log(JSON.stringify(doc));
        client.close();
      })
    }
  )
});
