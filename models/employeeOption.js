var mongoose = require('mongoose');

var SelectSchema = mongoose.Schema({
    
    selectEmployee1: {
		type: String
	}
	});

var employeeOption = module.exports = mongoose.model('employeeOption', SelectSchema);