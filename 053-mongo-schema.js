/**
 * @author krishna
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	objectId = Schema.ObjectId;

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

var CommentedSchema = new Schema({
	commenter: String,
	body: String,
	posted: Date
})

var author = mongoose.model('Author',AuthorSchema);
var comment = mongoose.model('Comment',CommentedSchema);
