/**
 * @author krishna
 */
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.on('data',function(chunk){
	process.stdout.write('data: '+chunk);
});

process.on('end',function(){
	process.stdout.write('end');
});
