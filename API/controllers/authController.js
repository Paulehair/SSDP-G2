const Employee = require('./../models/employeeModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
const config = require('../config/config');

// Create token to allow server/client connection
const signToken = id => {
	return jwt.sign(
		{
			id
		},
		config.JWT_SECRET,
		{
			expiresIn: config.JWT_EXPIRATION_TIME
		}
	);
};

exports.login = async (req, res) => {
	try {
		const {email, password, role} = req.body;

		if (!email || !password) {
			console.log('Entrez un mdp et un identifiant');
			return;
		}

		const user = await Employee.findOne({
			email
		});

		if (!(await bcrypt.compare(password, user.password))) {
			console.log(password, user.password);

			console.log('Mauvais mdp');
			return;
		}

		const token = signToken(user._id);

		res.json({
			status: 'connected',
			user,
			token
		});
	} catch (err) {
		return err;
	}
};

exports.checkLogin = async (req, res, next) => {
	let token;

	if (req.headers.authorization) {
		token = req.headers.authorization;
	}

	if (!token) {
		console.log('no token');
		return;
	}

	// Token verification
	const decoded = await promisify(jwt.verify)(token, config.JWT_SECRET);

	const currentUser = await Employee.findById(decoded.id);
	if (!currentUser) {
		console.log('user non connecté ou pas existant');
		return;
	}

	req.user = currentUser;
	next();
};

exports.checkPermission = async (req, res, next) => {
	/**
	 * ADMIN INFO:
	 * mail : salarie.admin@samusocial.net
	 * password : admin
	 */
	try {
		if (req.user.role !== 'admin') {
			console.log("Vous n'avez pas les droits");
			return;
		}
	} catch (err) {}
	next();
};
