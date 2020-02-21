const Employee = require('./../models/employeeModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
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


exports.login = catchAsync(async (req, res, next) => {
	const {email, password} = req.body;

	if (!email || !password) {
		return next(
			new AppError('Veuillez entrer votre identifiant et votre mot de passe'),
			400
		);
	}

	const user = await Employee.findOne({
		email
	});


	if (!(await bcrypt.compare('admin', user.password))) {
		return next(new AppError('Mot de passe incorrect'), 401);
	}

	const token = signToken(user._id);

	res.json({
		status: 'connected',
		user,
		token
	});
});

exports.checkLogin = catchAsync(async (req, res, next) => {
	let token;

	if (req.headers.authorization) {
		token = req.headers.authorization;
	}

	if (!token) {
		return next(new AppError("Vous n'êtes pas connecté."), 401);
	}

	// Token verification
	const decoded = await promisify(jwt.verify)(token, config.JWT_SECRET);

	const currentUser = await Employee.findById(decoded.id);

	if (!currentUser) {
		return next(
			new AppError("Cet utilisateur n'existe pas ou n'est pas connecté."),
			401
		);
	}

	req.user = currentUser;
	next();
});

exports.checkPermission = catchAsync(async (req, res, next) => {
	if (req.user.role !== 'admin') {
		return next(
			new AppError("Vous n'avez pas les droits pour effectuer cette action."),
			401
		);
	}
	next();
});
