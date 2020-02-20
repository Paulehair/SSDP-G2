const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');
const Team = require('./../models/teamModel');
const Visit = require('./../models/visitModel');

exports.getVisit = async (req, res) => {
	try {
		let date = new Date();
		date.setMonth(date.getMonth() - 3);
		const teams = await Team.find({sector_id: req.params.sector}).lean();

		const hotels = await Hotel.find({
			sector_id: req.params.sector,
			rooms: {$gte: 1}
		}).lean();

		const maxDay = 4;
		// const mainHotels = hotels.slice(0, daysCount * teams.length);
		// let remainingHotels = hotels.slice(daysCount * teams.length + 1);
		// console.log(mainHotels[0], remainingHotels[0]);
		const maxTime = 250;
		// console.log(hotels.length, mainHotels.length, remainingHotels.length);
		const planning = [];
		const timePerRoom = 5;
		const visits = [];
		let teamIndex = 0;
		hotels.forEach(hotel => {
			if (teamIndex === teams.length - 1) {
				teamIndex = 0;
			}
			visits.push({
				team_id: teams[teamIndex]._id,
				hotel_id: hotel._id,
				hotel_name: hotel.name,
				duration: hotel.rooms * timePerRoom
			});
		});

		// for (let i = 0; i < visits.length; i += teams.length) {
		// 	for (let day = 0; day < maxDay; day++) {
		// 		teams.forEach((team, teamIndex) => {
		// 			if (!planning[day]) {
		// 				planning[day] = [];
		// 			}
		// 			planning[day].push(visits[i + teamIndex]);
		// 		});
		// 	}
		// }

		let visitIndex = 0;
		let workingTimes = {};
		visits.forEach(visit => {
			for (let day = 0; day < maxDay; day++) {
				teams.forEach((team, teamIndex) => {
					if (!workingTimes[team._id]) {
						workingTimes[team._id] = 0;
					}
					if (!planning[day]) {
						planning[day] = [];
					}
					planning[day].push(visits[visitIndex + teamIndex]);
				});
				visitIndex += teams.length;
			}
		});

		// teams.forEach((team, index) => {
		// 	mainHotels.forEach((mainHotel, i) => {
		// 		if (i < daysCount) {
		// 			if (!planning[i]) {
		// 				planning[i] = [];
		// 			}
		// 			// const visit = await visit.create({
		// 			// 	team_id: team._id,
		// 			// 	hotel_id: mainHotel._id
		// 			// });
		// 			if (planning[i].find(visit => visit.hotel_id === mainHotel._id)) {
		// 				return;
		// 			}
		// 			const visit = {
		// 				team_id: team._id,
		// 				hotel_name: mainHotel.name,
		// 				hotel_id: mainHotel._id,
		// 				duration: mainHotel.rooms * 5
		// 			};
		// 			planning[i].push(visit);
		// 		}
		// 		// mainHotels.shift();
		// 	});
		// });

		// planning.forEach((day, i) => {
		// 	teams.forEach(team => {
		// 		let currentTime = 0;
		// 		remainingHotels.forEach(remainingHotel => {
		// 			if (currentTime >= maxTime) {
		// 				// console.log(currentTime);
		// 				return;
		// 			}
		// 			const visit = {
		// 				team_id: team._id,
		// 				hotel_name: remainingHotel.name,
		// 				hotel_id: remainingHotel._id,
		// 				duration: remainingHotel.rooms * 5
		// 			};
		// 			planning[i].push(visit);
		// 			currentTime += remainingHotel.rooms * 5;
		// 		});
		// 		// remainingHotels.shift();
		// 	});
		// });
		// console.log(planning);

		// const maxVisit = 4;
		// mainHotels.forEach((hotel, i) => {
		// 	if (!planning[i]) {
		// 		planning[i] = [];
		// 	}
		// 	planning[i].push(hotel);
		// });

		// planning.forEach((day, index) => {
		// 	let remainingHotels = hotels.slice(daysCount * index + 1);

		// 	remainingHotels.forEach((hotel, i) => {
		// 		if (i < maxVisit - 1) {
		// 			day.push(hotel);
		// 		}
		// 	});
		// });

		// const employees = await Employee.find({sector: req.body.sector});

		// const binome1 = employees.slice(0, 2);
		// const binome2 = employees.slice(2);
		// const index = 1;

		// planning.forEach((day, a) => {
		// 	day.forEach((visit, i) => {
		// 		if (i % 2 == 0) {
		// 			visit['team'] = binome1;
		// 		} else {
		// 			visit['team'] = binome2;
		// 		}
		// 	});
		// });

		res.status(200).json({
			status: 'success',
			planning
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};
