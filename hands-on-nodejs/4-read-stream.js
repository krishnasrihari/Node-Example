var fs = require('fs');
var readStream = fs.createReadStream('/etc/passwd');
readStream.on('data',function(data){
	console.log(data.toString());
});

readStream.on('end',function(){
	console.log('file ended');
})
