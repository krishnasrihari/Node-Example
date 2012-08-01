/**
 * @author krishna
 */
var options = {
	path: '/',
	host: 'sdfhskfjhsdf.com',
	port: 80	
}

var http = require('http');


var request = http.get(options,function(res){
		console.log('Will this called?');
});

request.on('error',function(e){
	console.log('Will we call error?');
})
