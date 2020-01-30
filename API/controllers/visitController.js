const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');

exports.getVisit = async (req, res) => {
	try {
		let date = new Date();
		date.setMonth(date.getMonth() - 3);

		const hotels = await Hotel.aggregate([
			{
				$match: {
					anomaly: {$gte: 45},
					lastVisit: {$lt: date},
					sector: {$eq: req.body.sector}
				}
			},
			{
				$sort: {anomaly: -1}
			}
		]);

		const planning = [];
		const daysCount = 4;
		const mainHotels = hotels.slice(0, daysCount);

		const maxVisit = 4;
		mainHotels.forEach((hotel, i) => {
			if (!planning[i]) {
				planning[i] = {};
				planning[i]['visits'] = [];
			}
			planning[i]['visits'].push(hotel);
		});

		planning.forEach((day, index) => {
			let remainingHotels = hotels.slice(daysCount * index + 1);

			remainingHotels.forEach((hotel, i) => {
				if (i < maxVisit - 1) {
					day.visits.push(hotel);
				}
			});
		});

		const employees = await Employee.find({sector: req.body.sector});

		const binome1 = employees.slice(0, 2);
		const binome2 = employees.slice(2);

		planning.forEach(day => {
			day.visits.forEach((visit, i) => {
				if (i > 1) {
					visit['team'] = binome1;
				} else {
					visit['team'] = binome2;
				}
			});
		});

		res.status(200).json({
			status: 'success',
			numberOfHotels: hotels.length,
			numberOfEmployees: employees.length,
			data: {
				planning,
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
