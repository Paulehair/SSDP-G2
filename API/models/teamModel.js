const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
	sector_id: String,
	team: [
		{
			_id: false,
			staff_id: String
		}
	]
});

module.exports = mongoose.model('Team', teamSchema);
