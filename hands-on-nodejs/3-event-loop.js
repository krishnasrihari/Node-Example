/**
 * @author krishna
 */

var open = false;

setTimeout(function(){
	open = true;
},1000)

while(!open){
	console.log("looping")
}

console.log('Openned');
