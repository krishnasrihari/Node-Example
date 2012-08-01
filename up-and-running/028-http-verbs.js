var express = require('express');
var app = express.createServer();

var users = [{name:'tj'},{name: 'tom'}]
app.get('/users/:id/:op?',function(req,res,next){
	console.log(req.params.id)
	req.user = users[req.params.id];
	if(req.user){
		next()
	}else{
		next(new Error('can not find user name with :'+req.params.id));
	}
});

app.get('/users/:id', function(req,res){
	res.send('viewing '+req.user.name);
})

app.get('/users/:id/edit', function(req,res){
	res.send('editing '+req.user.name);
})

app.put('/users/:id', function(req,res){
	res.send('Updating '+req.user.name);
})

app.get('*', function(req,res){
	res.send('Danger, Will Rabinson 404');
})

app.listen(4000);
