/**
 * @author krishna
 */
var http = require('http');
http.createServer(function(req,res){
	var client = http.createClient(5984,'127.0.0.1');
	var request = client.request('DELETE','/dbname');
	request.end();
	
	request.on('response',function(response){
		response.on('end',function(){
			if(response.statusCode == 200 ){
				console.log('Database deleted');
			}else{
				console.log('Could not delete database');
			}
		})
	})	
}).listen(4000);