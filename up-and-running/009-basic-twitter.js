/**
 * @author krishna
 */
var express = require('express');
var app = express.createServer();
app.listen(4000);

var tweets = [];

app.get('/',function(req,res){
	res.send('Welcome to node twitter');
});

app.post('/send',express.bodyParser(),function(req,res){
	if(req.body && req.body.tweet){
		tweets.push(req.body.tweet);
		res.send({status:'ok', message:'tweet received'});
	}else{
		res.send({status:'nok',message:'no tweet'});
	}
});

app.get('/tweets',function(req,res){
	res.send(tweets);
});

