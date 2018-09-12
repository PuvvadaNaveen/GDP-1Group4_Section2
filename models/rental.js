var mongoose = require('mongoose');
//
var RentalSchema = mongoose.Schema({
	Date1: {
        type: String 
	},
	Date2: {
		type: String
	},
	firstname: {
		type: String
	},
	phn: {
		type: Number
	},
	mail: {
		type: String
	},
	std: {
		type: String
	},
	prnt: {
		type: String
	},
	time: {
		type: String
	},
	S: {
		type: String
	},
	t: {
		type: Number
	},
	fee: {
		type: String
	},
	amt: {
		type: String
	},
	rtn: {
		type: String
	},
	charges: {
		type: String
	}
	});

var Rental = module.exports = mongoose.model('Rental', RentalSchema);