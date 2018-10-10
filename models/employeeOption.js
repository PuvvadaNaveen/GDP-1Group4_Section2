var mongoose = require('mongoose');

var EmployeeSchema = mongoose.Schema({

	empID: {
		type: String
	},
    
    selectEmployee1: {
		type: String
	}
	});

var employeeOption = module.exports = mongoose.model('employeeOption', EmployeeSchema);