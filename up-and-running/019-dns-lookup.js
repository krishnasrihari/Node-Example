/**
 * @author krishna
 */
var dns = require('dns');

dns.lookup('skilledtree.com',4,function(e,address){
	console.log(address);
})
