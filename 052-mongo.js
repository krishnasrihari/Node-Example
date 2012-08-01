/**
 * @author krishna
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db('node-mongo', new mongo.Server(host,port,{}),{});

db.open(function(err,db){
	db.collection('users',function(err,collection){
		collection.insert({username:'krishna',firstname:'krishna'},function(err,data){
			console.log(data);
			db.close();
		});
	});
})
