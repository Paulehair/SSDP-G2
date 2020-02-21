const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const sectorSchema = new mongoose.Schema({
	zone: {
		type: String,
		unique: true,
		required: true
	}
});

module.exports = mongoose.model('Sector', sectorSchema);
