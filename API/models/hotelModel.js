const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
	uuid: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: [true, 'A hotel must have a name']
	},
	address: {
		type: String,
		required: [true, 'A hotel must have an address']
	},
	zipCode: {
		type: Number,
		required: [true, 'A hotel must have a zip code']
	},
	sector: {
		type: String,
		required: [true, 'A hotel must have a sector']
	},
	city: {
		type: String,
		required: [true, 'A hotel must have a city']
	},
	status: {
		type: String
	},
	rooms: {
		type: Number
	},
	lastVisit: {
		type: Date
	},
	anomaly: {
		type: Number,
		max: [100, 'Anomaly is a percentage and must be below 100']
	}
});

module.exports = mongoose.model('Hotel', hotelSchema);
