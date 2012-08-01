/**
 * @author krishna
 */
var dbHost = '127.0.0.1';
var	dbPort = 5984;
var	dbName = 'users';

var util = require('util');	
var couchdb = require('felix-couchdb');
var client = couchdb.createClient(dbPort,dbHost);
var db = client.db(dbName);

var user = {
		name: {
			first: 'joe',
			last: 'Doe'
		}
}

db.saveDoc('joe',user,function(err,doc){
	if(err){
		console.log(JSON.stringify(err));
	}else{
		console.log('user doc created');
	}
})
