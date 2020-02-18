const Hotel = require('./../models/hotelModel');
const fs = require('fs');

exports.getHotelList = async (req, res) => {
	try {
		const sector_id = req.params.sector;
		const hotels = await Hotel.find({sector_id}).sort({
			lastVisit: -1,
			anomaly: 1
		});

		res.status(200).json({
			status: 'success',
			data: {
				hotels
			}
		});
	} catch (err) {
		console.warn(err);
	}
};

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

exports.importHotels = async (req, res) => {
	try {
		const data = JSON.parse(
			fs.readFileSync(`${__dirname}/../data/hotels-formatted.json`)
		);

		await Hotel.create(data.hotels);
		res.json({
			status: 'success'
		});
	} catch (err) {
		console.warn(err);
	}
};
