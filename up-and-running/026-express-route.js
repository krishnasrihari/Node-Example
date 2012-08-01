/**
 * @author krishna
 */
var express = require('express');
var app = express.createServer();

app.get('/:id?',function(req,res){
	if(req.params.id){
		res.send(req.params.id);
	}else{
		res.send('oh');
	}
})

app.listen(4000);
