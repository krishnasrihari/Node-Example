/**
 * @author krishna
 */
var redis = require('redis'),
	client = redis.createClient();
	
client.on('error',function(err){
	console.log(err);
});

client.hmset("user","fullname","krishna srihari","firstname", "krishna","lastname","srihari");

client.hkeys("user",function(err,replies){
	replies.forEach(function(reply,i){
		console.log(i + " : "+reply);
	})
	client.end();
})
