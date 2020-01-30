const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');

exports.getHotels = async (req, res) => {
	try {
		const hotels = await Hotel.find();
		res.status(200).json({
			status: 'success',
			data: {
				hotels
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.getHotel = async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				hotel
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.createHotel = async (req, res, next) => {
	const newHotel = await Hotel.create(req.body);
	res.status(200).json({
		status: 'Success',
		data: {
			hotel: newHotel
		}
	});
};

exports.updateHotel = async (req, res) => {
	try {
		const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});
		res.status(200).json({
			status: 'success',
			data: {
				hotel
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.deleteHotel = async (req, res) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
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

exports.getHotelsSortByAnomalyInParis = async (req, res) => {
	try {
		const hotels = await Hotel.aggregate([
			{
				$match: {anomaly: {$gte: 45}, sector: 'Paris'}
			},
			{
				$sort: {anomaly: -1}
			}
		]);
		const employees = await Employee.aggregate([
			{
				$match: {sector: 'Paris'}
			}
		]);
		res.status(200).json({
			status: 'success',
			numberOfHotels: hotels.length,
			numberOfEmployees: employees.length,
			data: {
				hotels,
				employees,
				visit: {
					hotel1: hotels[1],
					visitor1: employees[1]
				}
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};
