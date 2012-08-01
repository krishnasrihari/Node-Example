/**
 * @author krishna
 */

var dns = require('dns');

dns.resolve('skilledtree.com','MX', function(e,r){
	if(e){
		console.log(e.toString());
	}
	console.log(r);
});

dns.resolveMx('skilledtree.com', function(e,r){
	if(e){
		console.log(e.toString());
	}
	console.log(r);	
});
