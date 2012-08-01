/**
 * @author krishna
 */
var cp = require('child_process');

cp.exec('ls -1',function(e,stdout,stderr){
	if(!e){
		console.log(stdout);
		console.log(stderr)	
	}
	
})
