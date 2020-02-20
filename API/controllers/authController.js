const Employee = require('./../models/employeeModel');
const bcrypt = require('bcryptjs')

exports.login = async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await Employee.findOne({
      email
    });

    if(!await bcrypt.compare(password, user.password)) {
      console.log('Mauvais mdp')
      return
    }
    
    res.json({
      status: 'connecté',
      user
    })
  } catch (err) {

  }
}

exports.checkPermission = () => {
  /**
   * ADMIN INFO:
   * mail : salarie.admin@samusocial.net
   * password : admin
   */
}
