const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
	team_id: String,
	hotel_id: String,
	hotel_name: String,
	duration: Number
});

module.exports = mongoose.model('Visit', visitSchema);
