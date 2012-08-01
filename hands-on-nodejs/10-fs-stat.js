/**
 * @author krishna
 */
var fs = require('fs');
fs.stat('/etc/passwd',function(err,stats){
	if(err){console.log(err.message);return;}
	console.log(stats);
})
