/**
 * @author krishna
 */
var http = require('http');
var server = http.createServer();

server.on('request',function(req,res){
	res.writeHead(200,{'contentType':'text/plain'});
	res.write('Hello World');
	res.end();
});

server.listen(4000);
