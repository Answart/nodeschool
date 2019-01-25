var mongo = require('mongodb').MongoClient;


var dbName = 'learnyoumongo';
var collectionName = 'parrots';
var age = parseInt(process.argv[2]) || 5;
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, client) {
  if (err) { throw err };
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  collection.count(
    { age: { $gt: +age }},
    function(err, count) {
      if (err) { throw err };

      console.log(count);
      client.close();
    }
  )
});
