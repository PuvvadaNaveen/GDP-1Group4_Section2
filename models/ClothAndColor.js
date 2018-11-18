var mongoose = require('mongoose');

var ClothandColorSchema = mongoose.Schema({
    performerId:{
        type:String
    },

	topItem: {
		type: String
	},
    
    topColor: {
		type: String
    },
    bottomItem: {
		type: String
	},
    
    bottomColor: {
		type: String
    },
    underItem: {
		type: String
	},
    
    underColor: {
		type: String
    },
    shoeItem: {
		type: String
	},
    
    shoeColor: {
		type: String
    },
    otherItem: {
		type: String
	},
    
    otherColor: {
		type: String
	}
	});

var clothandColor = module.exports = mongoose.model('clothandColor', ClothandColorSchema);