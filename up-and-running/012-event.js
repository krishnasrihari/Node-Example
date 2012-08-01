var EE = require('events').EventEmitter;
var ee = new EE();
var die = false;

ee.on('die',function(){
	die = true;
	console.log('die emitted;')
});

setTimeout(function(){
	console.log('emit the die');
	ee.emit('die')
},200);

while(!die){console.log('while')}

console.log('died');
