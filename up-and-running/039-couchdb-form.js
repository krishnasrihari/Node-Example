/**
 * @author krishna
 */
var http = require('http');
var qs = require('querystring');
var url = require('url');

var dbHost = '127.0.0.1',
	dbPort = '5984';
	
deleteDb = function(res,dbPath){
	var client = http.createClient(dbPort,dbHost),
		request = client.request('DELETE',dbPath);
	
	request.end();
		
	request.on('response',function(response){
		response.on('end',function(){
			if (response.statusCode == 200){
				showDbs(res,'Deleted database');
			}else{
				showDbs(res,'Could not delete database');
			}	
		});		
	});
}

createDb = function(res,dbname){
	var client = http.createClient(dbPort,dbHost),
		request = client.request('PUT','/'+dbname);
	
	request.end();
		
	request.on('response',function(response){
		response.on('end',function(){
			if (response.statusCode == 201){
				showDbs(res, dbname +' CREATED');
			}else{
				showDbs(res,'Could not create '+ dbname);
			}	
		});		
	});	
}

showDbs = function(res,message){
	var client = http.createClient(dbPort,dbHost),
		request = client.request('GET','/_all_dbs');
	request.end();
	
	request.on('response',function(response){
		responseBody = '';
		response.on('data',function(chunk){
			responseBody += chunk
		});
		
		response.on('end',function(){
			res.writeHead(200,{'content-type':'text/html'});
			res.write("<form method ='post'>");
			res.write("New Database Name: <input type='text' name='dbname' />");
			res.write("<input type='submit' />");
			res.write("</form>");
			if ( null != message ) res.write("<h1>" + message + "</h1>");
			
			res.write("<h1>Active databases </h1>");
			res.write("<ul>")
			var dblist = JSON.parse(responseBody);
			for(var i=0;i<dblist.length;i++){
				var dbname = dblist[i]
				res.write("<li><a href='/"+dbname+"'>"+dbname+"</a></li>");				
			}
			res.write("</ul>")
			res.end();
		});
	});
}

http.createServer(function(req,res){
	if(req.method == 'POST'){
		//parse the request
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		
		req.on('end',function(){
			var POST = qs.parse(body);
			var dbname = POST['dbname'];
			if(null != dbname){
				createDb(res,dbname);				
			}else{
				showDbs(res,'bad dbname, can not create database');
			}
		});
	}else{
		var path = url.parse(req.url).pathname;
		if(path != '/'){
			deleteDb(res,path);
		}else{
			showDbs(res);
		}
	}
}).listen(4000);
