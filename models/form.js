var mongoose = require('mongoose');
//
var FormSchema = mongoose.Schema({
	firstname: {
        type: String 
	},
	lastname: {
		type: String
	},
	charactername: {
		type: String
	},
	phonenumber: {
		type: Number
	}
});

var Form = module.exports = mongoose.model('Form', FormSchema);