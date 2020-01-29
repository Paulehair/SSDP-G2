const Employee = require('./../models/employeeModel');

exports.getEmployees = (req, res) => {
	try {
		const employees = Employee.find();

		res.status(200).json({
			status: 'success',
			data: {
				employees
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.getEmployee = (req, res) => {
	try {
		const employee = Employee.find(req.params.id);

		res.status(200).json({
			status: 'success',
			data: {
				employee
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.updateEmployee = (req, res) => {
	try {
		Employee.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

		res.status(200).json({
			status: 'success'
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.deleteEmployee = (req, res) => {
	try {
		Employee.findByIdAndDelete(req.params.id);

		res.status(200).json({
			status: 'success'
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};
