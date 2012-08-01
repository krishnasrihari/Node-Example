/**
 * @author krishna
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	objectId = Schema.ObjectId;
	
mongoose.connect('mongodb://localhost:27017/upandrunning',function(err){
	if(err){
		console.log('Could not connect the mongo DB');
	}
});

var AuthorSchema = new Schema({
	name: {
		fullname: String,
		firstname: String,
		lastname: String
	},
	contact:{
		address: String,
		street: String
	},
	photo: String
});

var Author = mongoose.model('Author',AuthorSchema);


new Author().save(function(err){
	if(err){
		console.log('could not save author');		
	}else{
		console.log('auther saved');
	}
	
});

Author.find(function(err,doc){
	console.log(doc);
})
