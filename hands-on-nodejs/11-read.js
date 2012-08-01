/**
 * @author krishna
 */
var fs  = require('fs');
fs.open('/var/log/system.log','r',function(err,fd){
	if(err){ console.log(err) }
	var readBuffer = new Buffer(1024),
		bufferOffset	=	0,
		bufferLength	=	readBuffer.length,
		filePosition	=	100;
		
	fs.read(fd,readBuffer,bufferOffset,bufferLength,filePosition,function(err,readBytes){
		if(err){console.log(err);}
		console.log('just read '+readBytes+ ' bytes');
		if(readBytes > 0){
			console.log(readBuffer.slice(0,readBytes));
		}
	});
});
