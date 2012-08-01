/**
 * @author krishna
 */
var redis = require('redis'),
	client = redis.createClient();
	
client.on('error',function(err){
	console.log(err);
});

client.sadd("members","krishna");
client.sadd("members","kiran");
client.sadd("members","naru");
client.sadd("members","srinu");

client.smembers("members",function(err,members){
	console.log(members);
	client.end();
})
