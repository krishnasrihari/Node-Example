/**
 * @author krishna
 */
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

var rsswarn = (12 * 1024 * 1024),
	heapwarn= (10 * 1024 * 1024)
	
if(cluster.isMaster){
	//fork workers
	for(i=0;i<numCPUs;i++){
		var worker = cluster.fork();
		worker.on('message',function(m){
			if(m.memory){
				if(m.memory.rss > rsswarn){
					console.log('Worker '+m.process+ ' using too much of memory');
				}
			}
		});
	}
	
	cluster.on('died',function(worker){
		console.log('worker '+worker.pid+ ' died');
	})
}else{
	//worker process has http server
	var process = http.Server(function(req,res){
		res.writeHead(200);
		res.end('hello worker!');
	}).listen(4000);
	
	setInterval(function report(){
		process.send({memory: process.memoryUsage(),  process: process.pid})
	},1000)
}