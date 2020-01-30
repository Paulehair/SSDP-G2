const Hotel = require('./../models/hotelModel');

exports.getHotels = async (req, res) => {
	try {
		const hotels = await Hotel.find();

		console.log('!!!!!', hotels);

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
		const hotel = Hotel.find(req.params.id);

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
	const newHotel = await Hotel.create({
		uuid: req.body.uuid,
		name: req.body.name
	});

	res.status(200).json({
		status: 'Success',
		data: {
			hotel: newHotel
		}
	});
};

exports.updateHotel = (req, res) => {
	try {
		Hotel.findByIdAndUpdate(req.params.id, req.body, {
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

exports.deleteHotel = (req, res) => {
	try {
		Hotel.findByIdAndDelete(req.params.id);

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
