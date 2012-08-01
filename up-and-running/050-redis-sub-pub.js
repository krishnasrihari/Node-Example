/**
 * @author krishna
 */
var redis = require('redis');
var talkativeClient = redis.createClient();
var pensiveClient = redis.createClient();

pensiveClient.on('subscribe',function(channel,count){
	talkativeClient.publish(channel, 'Welcome to '+channel);
	talkativeClient.publish(channel, 'you subscribed '+ count+' channels');
});

pensiveClient.on('unsubscribe',function(channel,count){
	if(count==0){
		talkativeClient.end();
		pensiveClient.end();
	}
});

pensiveClient.on('message',function(channel, message){
	console.log(channel+': '+message);
});

pensiveClient.on('ready',function(){
	pensiveClient.subscribe('peace', 'quit','noisy');
	setTimeout(function(){
		pensiveClient.unsubscribe('peace','quit','noisy');
	},1000)
});
