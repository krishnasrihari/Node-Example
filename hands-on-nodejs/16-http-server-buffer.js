/**
 * @author krishna
 */
require('http').createServer(function(req,res){
	var buffer = new Buffer('Hello World');
	buffer[0] = 45;
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write(buffer);
	res.end();
}).listen(4000);
