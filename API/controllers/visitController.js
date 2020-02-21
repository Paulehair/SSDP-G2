const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');
const Team = require('./../models/teamModel');
const Visit = require('./../models/visitModel');

exports.getVisit = async (req, res) => {
	try {
		const visits = await Visit.find();

		res.json({
			visits
		});
	} catch (err) {}
};
