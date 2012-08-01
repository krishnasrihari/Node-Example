/**
 * @author krishna
 */
var express = require('express');
var app = express.createServer();
app.listen(4000);

var tweets = [];

app.get('/',function(req,res){
	var title = "Welcome to ",
		header = "Express";
	res.render('index',{
		locals: {
			'title': title,
			'header': header,
			'tweets': tweets,
			'stylesheets': ['/public/style.css']
		}
	})
})
