const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	postCode: {
		type: Number,
		required: true
	},
	city: {
		type: String
	},
	status: {
		type: String
	},
	rooms: {
		type: Number
	}
});

module.exports = mongoose.model('Hotel', hotelSchema);
