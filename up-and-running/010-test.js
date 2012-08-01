/**
 * @author krishna
 */

var http = require('http'),
	assert = require('assert');

var options = {
	method: 'POST',
	host:	'localhost',
	port:	'4000',
	path:	'/send',
	headers: {'content-type':'application/x-www-form-urlencoded'}
}	
	
var request = http.request(options,function(res){
	res.setEncoding('utf8');
	
	var data = '';
	res.on('data',function(fd){
		data += fd;
	});
	
	res.on('end',function(){
		assert.strictEqual(data,'{"status":"ok","message":"tweet received"}');
	});

})	

request.write('tweet=test');
request.end();
