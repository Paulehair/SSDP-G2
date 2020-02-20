const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
	sector_id: String,
	team: [
		{
			_id: false,
			employees: [
				{
					_id: false,
					employee_id: String
				}
			]
		}
	]
});

module.exports = mongoose.model('Team', teamSchema);
