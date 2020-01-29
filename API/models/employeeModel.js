const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  occupation: {
    type: String
  },
  area: {
    type: String
  },
  address: {
    type: String
  }
})

// Password hash function before creating new employee
employeeSchema.pre('save', async function (next) {
    // Only run this function if password was either created or modified
    if (!this.isModified('password')) return next();
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('Employee', employeeSchema)
