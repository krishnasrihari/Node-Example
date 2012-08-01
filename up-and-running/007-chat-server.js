/**
 * @author krishna
 */
var net = require('net');

var server = net.createServer(),
	clients = [];


server.on('connection',function(client){
	client.name = client.remoteAddress+':'+client.remotePort
	client.write('Hi '+client.name);
	console.log(client.name + ' joined');
	clients.push(client);
	
	client.on('data',function(data){
		broadcast(data,client)				
	});
	
	client.on('end',function(){
		console.log(client.name + 'exit');
		clients.splice(clients.indexOf(client),1);
	});	
	
	client.on('error',function(e){
		console.log(e)
	});
});

function broadcast(message,client){
	var clears = [];
	for(var i=0;i<clients.length;i++){
		if(client !== clients[i]){
			if(clients[i].writable){
				clients[i].write(client.name+ ' says '+ message);	
			}else{
				clears.push(clients[i]);
				clients[i].destroy()
			}
			
		}
	}
	
	for(var i=0;i<clears.length;i++){
		clients.splice(clients.indexOf(clears[i],1));
	}
}

server.listen(4000);