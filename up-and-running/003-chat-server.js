/**
 * @author krishna
 */

var net = require('net');

var server = net.createServer(),
	clients = [];


server.on('connection',function(client){
	client.write('Hey\n');
	clients.push(client);
	
	client.on('data',function(data){
		for(i=0;i<clients.length;i++){
			clients[i].write(data.toString());
		}		
	});	
});

server.listen(4000);