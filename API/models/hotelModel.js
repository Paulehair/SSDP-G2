const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
	uuid: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	address: {
		type: String
	},
	zipCode: {
		type: Number
	},
	sector: {
		type: String
	},
	city: {
		type: String
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
		type: Number
	}
});

module.exports = mongoose.model('Hotel', hotelSchema);
