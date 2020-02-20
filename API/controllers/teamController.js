const Team = require('./../models/teamModel');
const Employee = require('./../models/employeeModel');

exports.createTeam = async (req, res) => {
	try {
		// const employees = await Employee.aggregate([{$group: {sector_id: 1}}]);
		const teams = await Employee.aggregate([
			{
				$group: {
					_id: '$sector_id',
					obj: {$push: '$$ROOT'}
				}
			}
		]);
		res.json({
			teams
		});
	} catch (err) {
		console.warn(err);
	}
};
