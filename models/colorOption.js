var mongoose = require('mongoose');

var ColorSchema = mongoose.Schema({

	colorID: {
		type: String
	},
    
    selectColor01: {
		type: String
	}
	});

var colorOption = module.exports = mongoose.model('colorOption', ColorSchema);