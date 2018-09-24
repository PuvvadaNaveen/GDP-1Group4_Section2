var mongoose = require('mongoose');
//
var HomeSchema= mongoose.Schema({
tu: {
        type: String 
	},
	sk: {
		type: String
	},
	su: {
		type: String
    },
    tr: {
		type: String
	}
	});

var Home= module.exports = mongoose.model('Home', HomeSchema);