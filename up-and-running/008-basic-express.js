/**
 * @author krishna
 */
var express = require('express');
var app = express.createServer();

app.get('/',function(req,res){
	res.send('Welcome to node twitter');
})

app.listen(4000);
