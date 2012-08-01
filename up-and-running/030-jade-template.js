/**
 * @author krishna
 */
var express = require('express');
var app = express.createServer();

app.get('/',function(req,res){
	res.render('index.jade',{title:'Jade Example', layout: false});
})

app.listen(4000);
