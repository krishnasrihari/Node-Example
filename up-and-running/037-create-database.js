/**
 * @author krishna
 */
var http = require('http');
http.createServer(function(req,res){
	var client = http.createClient(5984,'127.0.0.1');
	var request = client.request('PUT','/dbname');
	request.end();
	
	request.on('response',function(response){
		response.on('end',function(){
			if(response.statusCode == 201 ){
				console.log('Database successfully created');
			}else{
				console.log('Could not create database');
			}
		})
	})	
}).listen(4000);

