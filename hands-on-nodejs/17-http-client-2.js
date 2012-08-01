/**
 * @author krishna
 */

var options = {
	host:	'www.skilledtree.com',
	port:	'80',
	method:	'GET',
	path:	'/resumes'	
};

var req = require('http').request(options,function(res){
	console.log('status: '+res.statusCode);
	console.log('headers: '+JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(fd){
		console.log('body: '+fd);
	});
});

req.write('data\n');
req.write('data\n');
req.end();

