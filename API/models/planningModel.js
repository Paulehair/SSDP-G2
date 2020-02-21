const mongoose = require('mongoose');

const planningSchema = new mongoose.Schema({
	sector_id: String,
	lanes: [
		[
			{
				_id: false,
				visit_id: String
			}
		]
	]
});

module.exports = mongoose.model('Planning', planningSchema);
