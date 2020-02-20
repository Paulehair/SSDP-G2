const Employee = require('./../models/employeeModel');
const Sector = require('./../models/sectorModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const fs = require('fs');

exports.getEmployees = catchAsync(async (req, res) => {
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
		results: employees.length,
		employees
	});
});

exports.getEmployee = catchAsync(async (req, res) => {
	const employee = await Employee.findById(req.params.id);
	if (!employee) {
		return next(new AppError('No employee found with that id', 404));
	}
	res.status(200).json({
		status: 'success',
		data: {
			employee
		}
	});
});

exports.createEmployee = catchAsync(async (req, res, next) => {
	const newEmployee = await Employee.create(req.body);
	res.status(200).json({
		status: 'Success',
		data: {
			employee: newEmployee
		}
	});
});

exports.updateEmployee = catchAsync(async (req, res) => {
	const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	});

	if (!employee) {
		return next(new AppError('No employee found with that id', 404));
	}

	res.status(200).json({
		status: 'success',
		data: {
			employee
		}
	});
});

exports.deleteEmployee = catchAsync(async (req, res) => {
	const employee = await Employee.findByIdAndDelete(req.params.id);

	if (!employee) {
		return next(new AppError('No employee found with that id', 404));
	}

	res.status(200).json({
		status: 'success',
		data: null
	});
});

exports.importEmployees = catchAsync(async (req, res) => {
	const data = JSON.parse(
		fs.readFileSync(`${__dirname}/../data/employees.json`)
	);

	await Employee.create(data.employees);
	res.json({
		status: 'success'
	});
});
