/**
 * @author krishna
 */
var redis = require('redis'),
	client = redis.createClient();
	
client.on('error',function(err){
	console.log(err);
});

client.hset("user","fullname","krishna srihari");
client.hset("user","firstname", "krishna");
client.hset("user","lastname","srihari");

client.hkeys("user",function(err,replies){
	replies.forEach(function(reply,i){
		console.log(i + " : "+reply);
	})
	client.end();
})
