var mongo = require('mongodb').MongoClient;


var dbName = 'learnyoumongo';
var collectionName = 'prices';
var size = process.argv[2] || "S";
var url = 'mongodb://localhost:27017/' + dbName;
// var exampleDoc = {
//   "name": "Tshirt",
//   "size": "S",
//   "price": 10,
//   "quantity": 12
//   "meta": {
//     "vendor": "hanes",
//     "location": "US"
//   }
// }

mongo.connect(url, function(err, client) {
  if (err) { throw err };
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  collection.aggregate([
    { $match: { size: size }},
    { $group: {
      _id: 'average',
      average: { $avg: '$price' }
    }}
  ]).toArray(function(err, results) {
    if (err) { throw err };
    if (!results.length) { ;throw new Error('No results found') }

    var num = results[0];
    console.log(Number(num.average).toFixed(2));
    client.close();
  })
});
