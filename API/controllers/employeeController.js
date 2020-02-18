const Employee = require('./../models/employeeModel');
const fs = require('fs');

exports.getEmployees = async (req, res) => {
	try {
		const employees = await Employee.find();
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

exports.getEmployee = async (req, res) => {
	try {
		const employee = await Employee.findById(req.params.id);

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

exports.createEmployee = async (req, res, next) => {
	const newEmployee = await Employee.create(req.body);
	res.status(200).json({
		status: 'Success',
		data: {
			employee: newEmployee
		}
	});
};

exports.updateEmployee = async (req, res) => {
	try {
		const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

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

exports.deleteEmployee = async (req, res) => {
	try {
		await Employee.findByIdAndDelete(req.params.id);

		res.status(200).json({
			status: 'success',
			data: null
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.importEmployees = async (req, res) => {
	try {
		const data = JSON.parse(
			fs.readFileSync(`${__dirname}/../data/employees.json`)
		);

		await Employee.create(data.employees);
		res.json({
			status: 'success'
		});
	} catch (err) {
		console.warn(err);
	}
};
