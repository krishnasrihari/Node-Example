/**
 * @author krishna
 */
var http = require('http'),
	io = require('socket.io');
	
var server = http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{});
	res.end('Hello');
})

server.listen(4000);

var socket = io.listen(server);

socket.on('connection',function(client){
	console.log('client connected')
})
