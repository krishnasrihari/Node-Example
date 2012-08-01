



var dbHost = "127.0.0.1";
var dbPort = 5984;
var dbName = 'users';
var couchdb = require('felix-couchdb');
var client = couchdb.createClient(dbPort, dbHost);
var db = client.db(dbName);
db.exists(function(err, exists) {
if (!exists) {
db.create();
console.log('Database ' + dbName + ' created.');
} else {
console.log('Database ' + dbName + ' exists.');
}
});