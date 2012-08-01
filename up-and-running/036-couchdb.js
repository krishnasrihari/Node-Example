/**
 * @author krishna
 */
var http = require('http');

http.createServer(function(req,res){
	var client = http.createClient(5984,'127.0.0.1');
	var request = client.request('GET','/_all_dbs');
	request.end();
	
	request.on('response', function(response){
		var responseBody = '';
		
		response.on('data', function(chunk){
			responseBody += chunk;
		});
		
		response.on('end', function(){
			res.writeHead(200,{'content-type':'text/plain'});
			res.write(responseBody);
			res.end();
		});
		
	});
}).listen(4000);
