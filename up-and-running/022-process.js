/**
 * @author krishna
 */
var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200,{});
	res.end('response');
	blogginCall('sent response');
	console.log('sent response');
}).listen(4000);

process.on('uncaughtException',function(e){
	console.log(e);
})

