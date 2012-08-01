/**
 * @author krishna
 */
var redis = require('redis'),
	client = redis.createClient();
	
client.on('error',function(err){
	console.log(err);
});

var user = {
	firstname: 'krishna',
	lastname: 'srihari',
	website: 'skilledtree',
	mail: 'krishna@skilledtree.com'
}
client.hmset("user",user);

client.hkeys("user",function(err,replies){
	replies.forEach(function(reply,i){
		console.log(i + " : "+reply);
	})
	client.end();
})