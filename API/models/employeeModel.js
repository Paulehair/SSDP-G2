const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employeeSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, 'An employee must have a first name']
	},
	lastName: {
		type: String,
		required: [true, 'An employee must have a last name']
	},
	email: {
		type: String,
		required: [true, 'An employee must have an email']
	},
	password: {
		type: String,
		required: [true, 'An employee must have a password'],
		default: 'intervenant'
	},
	role: {
		type: String
	},
	sector: {
		type: String,
		required: [true, 'An employee must have a sector']
	},
	address: {
		type: String
	},
	phone: {
		type: String
	}
});

// Password hash function before creating new employee
employeeSchema.pre('save', async function(next) {
	// Only run this function if password was either created or modified
	if (!this.isModified('password')) return next();
	// Hash the password with cost of 12
	this.password = await bcrypt.hash(this.password, 12);
	next();
});

module.exports = mongoose.model('Employee', employeeSchema);
