var mongoose = require('mongoose');

var MeasureSchema = mongoose.Schema({
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
  waistexpande : {
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
		type: Number
    },
    otheroverbodypadding: {
		type: Number
	}
	});

var Measure = module.exports = mongoose.model('Measure', MeasureSchema);