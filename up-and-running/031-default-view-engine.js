/**
 * @author krishna
 */
var express = require('express');
var app = express.createServer();

app.set('view engine','jade');

app.get('/',function(req,res){
	res.render('battlestar');
})

app.listen(4000);
