var mongoose = require('mongoose');

var MeasureSchema = mongoose.Schema({
	performerId:{
		type: String
	},
	perfId:{
		type: String
	},
	headcicumference: {
    type: Number
	},
	neck: {
		type: Number
	},
	armcycle: {
		type: Number
	},
	centrebacktowrist: {
        type: Number
	},
	chestrelaxed: {
		type: Number
	},
	chestexpanded: {
		type: Number
	},
	chestovercompressiongarnment: {
		type: Number
    },
  chestoverbodypadding: {
		type: Number
    },
  waistrelaxed: {
		type: Number
    },
  waistexpanded: {
		type: Number
    },
  fullhip: {
		type: Number
    },
    halfgirth: {
		type: Number
    },
    fullgirth: {
		type: Number
    },
    inseamtoankle: {
		type: Number
    },
    inseamtofloor: {
		type: Number
    },
    waistovercompressiongarnment: {
		type: Number
    },
    hipovercompressiongarnment: {
		type: Number
    },
    waistoverbodypadding: {
		type: Number
    },
    hipoverbodypadding: {
		type: Number
    },
    shoes: {
		type: Number
    },
    dominanthand: {
		type:	String
    },
    otheroverbodypadding: {
		type: Number
		},
		measurementsTakenOn:{
			type: String
		},
	});

var Measure = module.exports = mongoose.model('Measure', MeasureSchema);