/**
 * @author krishna
 */
var dbHost = "127.0.0.1";
var dbPort = 5984;
var dbName = 'users';
var couchdb = require('felix-couchdb');
var client = couchdb.createClient(dbPort, dbHost);
var db = client.db(dbName);
db.getDoc('jdoe', function(err,doc) {
console.log(doc);
});