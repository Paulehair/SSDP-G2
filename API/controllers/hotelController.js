const Hotel = require('./../models/hotelModel');
const Sector = require('./../models/sectorModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const fs = require('fs');

// exports.getHotelList = catchAsync(async (req, res) => {
// 	const sector_id = req.params.sector;
// 	const hotels = await Hotel.find({sector_id}).sort({
// 		lastVisit: -1,
// 		anomaly: 1
// 	});

// 	res.status(200).json({
// 		status: 'success',
// 		results: hotels.length,
// 		hotels
// 	});
// });

exports.getHotels = catchAsync(async (req, res) => {
	const hotels = await Hotel.find().lean();
	const sectors = await Sector.find().lean();

	hotels.forEach(hotel => {
		const sector = sectors.find(sector => sector._id == hotel.sector_id);
		hotel.sector = sector.zone;
	});

	res.status(200).json({
		status: 'success',
		results: hotels.length,
		hotels
	});
});

exports.getHotel = catchAsync(async (req, res) => {
	const hotel = await Hotel.findById(req.params.id);
	res.status(200).json({
		status: 'success',
		data: {
			hotel
		}
	});
});

exports.createHotel = catchAsync(async (req, res, next) => {
	const newHotel = await Hotel.create(req.body);
	res.status(200).json({
		status: 'Success',
		data: {
			hotel: newHotel
		}
	});
});

exports.updateHotel = catchAsync(async (req, res) => {
	const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	});

	if (!hotel) {
		return next(new AppError('No hotel found with that id', 404));
	}

	res.status(200).json({
		status: 'success',
		data: {
			hotel
		}
	});
});

exports.deleteHotel = catchAsync(async (req, res) => {
	const hotel = await Hotel.findByIdAndDelete(req.params.id);

	if (!hotel) {
		return next(new AppError('No hotel found with that id', 404));
	}

	res.status(200).json({
		status: 'success',
		data: null
	});
});

exports.importHotels = catchAsync(async (req, res) => {
	const data = JSON.parse(
		fs.readFileSync(`${__dirname}/../data/hotels-formatted.json`)
	);

	await Hotel.create(data.hotels);
	res.json({
		status: 'success'
	});
});
