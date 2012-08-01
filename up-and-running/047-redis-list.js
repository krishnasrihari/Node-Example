/**
 * @author krishna
 */
var redis = require('redis'),
	client = redis.createClient();
	
client.on('error',function(err){
	console.log(err);
});

client.lpush("puser","user1");
client.lpush("puser","user2");
client.lpush("puser","user3");
client.lpush("puser","user4");

client.rpop("puser",function(err,username){
	if(!err){
		console.log(username)
	}
	client.end();
})
