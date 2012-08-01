/**
 * @author krishna
 */
var EventEmitter = require('events').EventEmitter;
var Process = function(){
	console.log('init');
}
var util = require('util');
util.inherits(Process,EventEmitter);

var process = new Process();

process.on('exit',function(){
	setTimeout(function(){
		console.log('This wont call');
	},2000)
	console.log('Bye');
})

process.emit('exit');
