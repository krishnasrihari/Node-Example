/**
 * @author krishna
 */

require('http').createServer(function(req,res){
	res.writeHead(200,{'contentType':'text/plain'});
	res.write(req.url);
	res.end();
}).listen(4000);
