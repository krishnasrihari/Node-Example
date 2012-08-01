/**
 * @author krishna
 */
var http = require('http'),
	io = require('socket.io'),
	fs = require('fs');
	
var sockfile = fs.readFileSync('socket-client.html');

var server = http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.end(sockfile);
});

server.listen(4000);

var socket = io.listen(server);

socket.on('connection', function(client){
	console.log('Client connected');
	client.send('Welcome client '+client.sessionId);
})	
