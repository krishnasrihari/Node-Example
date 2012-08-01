/**
 * @author krishna
 */
var interval = 1000;
setInterval(function(){
	async(function(){
		console.log('async is done');
	});
},interval);
