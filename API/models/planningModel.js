const mongoose = require('mongoose');

const planningSchema = new mongoose.Schema({
	visits: [
		{
			_id: false,
			visit_id: String
		}
	]
});

module.exports = mongoose.model('Planning', planningSchema);
