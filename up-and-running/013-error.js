/**
 * @author krishna
 */
var options = {
	path: '/',
	host: 'sdfhskfjhsdf.com',
	port: 80	
}

var http = require('http');

try{
	http.get(options,function(res){
		console.log('Will this called?');
	});
}
catch(e){
	console.log('Will we call error?');
}

