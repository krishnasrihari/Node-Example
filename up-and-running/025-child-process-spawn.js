/**
 * @author krishna
 */
var cp = require('child_process');
var cat = cp.spawn('cat');

cat.stdout.on('data',function(chunk){
	console.log(chunk.toString());
})

cat.on('exit',function(){
	console.log('msdfk');
})

cat.stdin.write('mew');
cat.stdin.end();
