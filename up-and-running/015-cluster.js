/**
 * @author krishna
 */
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if(cluster.isMaster){
	//fork workers
	for(i=0;i<numCPUs;i++){
		cluster.fork();
	}
	
	cluster.on('died',function(worker){
		console.log('worker '+worker.pid+ ' died');
	})
}else{
	//worker process has http server
	http.Server(function(req,res){
		res.writeHead(200);
		res.end('hello worker!');
	}).listen(4000);
}
