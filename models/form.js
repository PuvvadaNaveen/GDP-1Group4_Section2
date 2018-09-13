var mongoose = require('mongoose');
//
var FormSchema = mongoose.Schema({
	firstname: {
        type: String 
	},
	lastname: {
		type: String
	},
	playname:{
		type:String
	},
	playdate:{
		type: Date
	},
	charactername: {
		type: String
	},
	phonenumber: {
		type: Number
	},
	textchoice: {
		type: String
	},
	email: {
		type: String
	},
	agreement: {
		type: String
	},
	dominanthand: {
		type: String
	},
	height: {
		type: String
	},
	estimatedweight: {
		type: Number
	},
	eyewearchoice: {
		type: String
	},
	hair: {
		type: String
	},
	facialhai: {
		type: String
	},
	earschoice: {
		type: String
	},
	otherpiercings: {
		type: String
	},
	tattoos: {
		type: String
	},
	tattooagreement: {
		type: String
	},
	comments: {
		type: String
	},
	shoes: {
		type: String
	},
	danceshoes: {
		type: String
	},
	shirtsize: {
		type: String
	},
	pants: {
		type: String
	},
	brasize: {
		type: String
	},
	ring: {
		type: String
	},
	allergy: {
		typr: String
	},
	other: {
		type: String
	},
	allergies: {
		type: String
	}
});

var Form = module.exports = mongoose.model('Form', FormSchema);