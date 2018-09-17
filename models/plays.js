var mongoose = require('mongoose');
//
var PlaySchema = mongoose.Schema({
	PlayStartDate: {
        type: String 
	},
	PlayEndDate: {
		type: String
	},
	playname: {
		type: String
	}
	});

var Play = module.exports = mongoose.model('Play', PlaySchema);