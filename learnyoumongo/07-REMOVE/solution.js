var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2] || 'learnyoumongo';
var collectionName = process.argv[3] || 'keys';
var id = process.argv[4] || '554a655c0639034860349353';
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, client) {
  if (err) { throw err };
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  collection.remove(
    { _id: id },
    function(err, result) {
      if (err) { throw err };

      client.close();
    }
  )
});
