/**
 * @author krishna
 */
var redis = require('redis'),
	client = redis.createClient();
	
client.on('error',function(err){
	console.log(err);
})	


client.set('key','server:name',redis.print);
client.get('key',function(err,result){
	console.log('key: '+result);
	client.end();
})
