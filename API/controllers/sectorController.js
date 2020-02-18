const Sector = require('./../models/sectorModel');

exports.getSector = async (req, res) => {
	try {
		const sectors = await Sector.find();

		res.status(200).json({
			status: 'success',
			sectors
		});
	} catch (err) {
		console.warn(err);
	}
};

exports.createSector = async (req, res) => {
	try {
		const sector = await Sector.create(req.body);

		res.status(200).json({
			status: 'success',
			sector
		});
	} catch (err) {
		console.warn(err);
	}
};

exports.updateSector = async (req, res) => {
	try {
		const sector = await Sector.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

		res.status(200).json({
			status: 'success',
			sector
		});
	} catch (err) {
		console.warn(err);
	}
};

exports.deleteSector = async (req, res) => {
	try {
		await Sector.findByIdAndDelete(req.body);

		res.status(200).json({
			status: 'success'
		});
	} catch (err) {
		console.warn(err);
	}
};
