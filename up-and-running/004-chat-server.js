/**
 * @author krishna
 */

var net = require('net');

var server = net.createServer(),
	clients = [];


server.on('connection',function(client){
	client.name = client.remoteAddress+':'+client.remotePort
	client.write('Hi '+client.name);
	clients.push(client);
	
	client.on('data',function(data){
		broadcast(data,client)				
	});	
});

function broadcast(message,client){
	for(var i=0;i<clients.length;i++){
		if(client !== clients[i]){
			clients[i].write(client.name+ ' says '+ message);
		}
	}
}

server.listen(4000);