const Employee = require('./../models/employeeModel');
const Sector = require('./../models/sectorModel');
const fs = require('fs');

exports.getEmployees = async (req, res) => {
	try {
		const employees = await Employee.find()
			.sort({sector_id: 1})
			.lean();
		const sectors = await Sector.find().lean();

		employees.forEach(employee => {
			const relevantSector = sectors.find(
				sector => sector._id == employee.sector_id
			);
			employee.sector = relevantSector.zone;
		});

		res.status(200).json({
			status: 'success',
			employees
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
