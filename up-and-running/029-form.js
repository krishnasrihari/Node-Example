/**
 * @author krishna
 */
var express = require('express');
var app = express.createServer();

app.use(express.limit('1mb'));
app.use(express.methodOverride());
app.use(express.bodyParser());

app.get('/',function(req,res){
	res.send('<form method="post" action="/">' +
			'<input type="hidden" name="_method" value="put" />' +
			'Your Name: <input type="text" name="username" />' +
			'<input type="submit" />' +
			'</form>');
});

app.post('/',function(req,res){
	res.send('Welcome to '+req.body.username);
});

app.listen(4000);
