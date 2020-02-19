const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');

exports.getVisit = async (req, res) => {
	try {
		let date = new Date();
		date.setMonth(date.getMonth() - 3);

		const hotels = await Hotel.aggregate([
			{
				$match: {
					lastVisit: {$lt: date},
					sector_id: {$eq: req.params.sector}
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
				planning[i] = [];
			}
			planning[i].push(hotel);
		});

		planning.forEach((day, index) => {
			let remainingHotels = hotels.slice(daysCount * index + 1);

			remainingHotels.forEach((hotel, i) => {
				if (i < maxVisit - 1) {
					day.push(hotel);
				}
			});
		});

		const employees = await Employee.find({sector: req.body.sector});

		const binome1 = employees.slice(0, 2);
		const binome2 = employees.slice(2);
		const index = 1;

		planning.forEach((day, a) => {
			day.forEach((visit, i) => {
				if (i % 2 == 0) {
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
			planning
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};
