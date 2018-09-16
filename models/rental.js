var mongoose = require('mongoose');
//
var RentalSchema = mongoose.Schema({
	StartDate: {
        type: String 
	},
	EndDate: {
		type: String
	},
	firstname: {
		type: String
	},
	phone: {
		type: String
	},
	mail: {
		type: String
	},
	fee: {
		type: Number
	},
	rental_item: {
		type: String
	}
	});

var Rental = module.exports = mongoose.model('Rental', RentalSchema);