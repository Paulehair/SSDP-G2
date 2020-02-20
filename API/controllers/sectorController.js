const Sector = require('./../models/sectorModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getSector = catchAsync(async (req, res) => {
	const sectors = await Sector.find();

	res.status(200).json({
		status: 'success',
		results: sectors.length,
		sectors
	});
});

exports.createSector = catchAsync(async (req, res) => {
	const sector = await Sector.create(req.body);

	res.status(200).json({
		status: 'success',
		sector
	});
});

exports.updateSector = catchAsync(async (req, res) => {
	const sector = await Sector.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	});

	if (!sector) {
		return next(new AppError('No sector found with that id', 404));
	}

	res.status(200).json({
		status: 'success',
		sector
	});
});

exports.deleteSector = catchAsync(async (req, res) => {
	const sector = await Sector.findByIdAndDelete(req.body);

	if (!sector) {
		return next(new AppError('No sector found with that id', 404));
	}

	res.status(200).json({
		status: 'success',
		data: null
	});
});
