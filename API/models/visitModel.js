const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
	hotels_id: String,
	team_id: String
});

module.exports = mongoose.model('Visit', visitSchema);
