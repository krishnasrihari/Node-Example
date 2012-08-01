/**
 * @author krishna
 */

var net = require('net');

var server = net.createServer();

server.on('connection',function(client){
	client.write('Hey');
	client.write('Bye!');
	client.end();
});

server.listen(4000);
