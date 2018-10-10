var mongoose = require('mongoose');

var ClothSchema = mongoose.Schema({

	clothID: {
		type: String
	},
    
    selectCloth: {
		type: String
	}
	});

var clothOption = module.exports = mongoose.model('clothOption', ClothSchema);