const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');

exports.getVisit = async (req, res) => {
	try {
		const hotels = await Hotel.aggregate([
			{
				$match: {anomaly: {$gte: 45}, sector: 'Paris'}
			},
			{
				$sort: {anomaly: -1}
			}
		]);
		const employees = await Employee.aggregate([
			{
				$match: {sector: 'Paris'}
			}
		]);
		res.status(200).json({
			status: 'success',
			numberOfHotels: hotels.length,
			numberOfEmployees: employees.length,
			data: {
				hotels,
				employees,
				visit: {
					hotel1: hotels[1],
					visitor1: employees[1]
				}
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};
