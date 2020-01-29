const Hotel = require('./../models/hotelModel');

exports.getHotels = (req, res) => {
	try {
		const hotels = Hotel.find();

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

exports.getHotel = (req, res) => {
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

exports.updateHotel = (req, res) => {
	try {
		await Hotel.findByIdAndUpdate(
				req.params.id,
				req.body, {
						new: true,
						runValidators: true
				}
		)

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
		await Hotel.findByIdAndDelete(req.params.id);

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
