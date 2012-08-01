/**
 * @author krishna
 */

var timeoutA = setTimeout(function(){
	console.log("timeoutA");	
},2000);

var timeoutB = setTimeout(function(){
	console.log('timeoutB');
	clearTimeout(timeoutA);
},1000)
