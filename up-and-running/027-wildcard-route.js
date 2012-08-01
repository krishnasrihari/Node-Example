/**
 * @author krishna
 */
var express = require('express');
var app = express.createServer();

app.get('/a*',function(req,res){
	res.send('a');
});

app.get('/b*/c*d',function(req,res){
	res.send('b');
})

app.get('*',function(req,res){
	res.send('*');
})

app.listen(4000)
