/**
 * @author krishna
 */
var net = require('net');

var server = net.createServer();

server.on('connection',function(client){
	client.write('Hey\n');
	client.on('data',function(data){
		console.log(data.toString());
	});	
});

server.listen(4000);