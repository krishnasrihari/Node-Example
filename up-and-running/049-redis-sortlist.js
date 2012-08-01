/**
 * @author krishna
 */
var redis = require('redis'),
	client = redis.createClient();
	
client.on('error',function(err){
	console.log(err);
});

client.zadd( "contestants", 60, "Deborah" );
client.zadd( "contestants", 65, "John" );
client.zadd( "contestants", 26, "Patrick" );
client.zadd( "contestants", 62, "Mike" );
client.zadd( "contestants", 24, "Courtney" );
client.zadd( "contestants", 39, "Jennifer" );
client.zadd( "contestants", 26, "Jessica" );
client.zadd( "contestants", 46, "Joe" );
client.zadd( "contestants", 63, "Bonnie" );
client.zadd( "contestants", 27, "Vinny" );
client.zadd( "contestants", 27, "Ramon" );
client.zadd( "contestants", 51, "Becky" );
client.zadd( "contestants", 41, "Sunny" );
client.zadd( "contestants", 47, "Antone" );
client.zadd( "contestants", 40, "John" );

client.zcard("contestants",function(err,length){
	var contestantCount = length;
	var membersPerTeam = Math.ceil(contestantCount / 3);
	
	client.zrange("contestants",membersPerTeam * 0, membersPerTeam * 1 -1, function(err,values){
		console.log("younger team: "+values);
	});
	
	client.zrange("contestants",membersPerTeam * 1, membersPerTeam * 2 -1, function(err,values){
		console.log("middle team: "+values);
	});

	client.zrange("contestants",membersPerTeam * 2, contestantCount, function(err,values){
		console.log("Elder team: "+values);
		client.end();
	});

	
	
})
