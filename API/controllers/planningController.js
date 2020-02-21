const Planning = require('./../models/planningModel');
const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');
const Team = require('./../models/teamModel');
const Visit = require('./../models/visitModel');

exports.createPlanning = async (req, res) => {
	try {
		let date = new Date();
		date.setMonth(date.getMonth() - 3);
		const teams = await Team.find({sector_id: req.params.sector}).lean();

		const hotels = await Hotel.find({
			sector_id: req.params.sector,
			rooms: {$gte: 1}
		})
			.sort({lastVisit: -1, anomaly: 1})
			.lean();

		const maxDay = 4;
		const maxTime = 300;
		const planning = [];
		const timePerRoom = 5;
		const visits = [];

		let teamIndex = 0;
		hotels.forEach(async hotel => {
			let newVisit = {
				team_id: teams[teamIndex]._id,
				hotel_id: hotel._id,
				hotel_name: hotel.name,
				duration: hotel.rooms * timePerRoom
			};

			// const newVisitObj = await Visit.create(newVisit);
			// newVisit = {visit_id: newVisitObj._id};

			visits.push(newVisit);
			if (teamIndex === teams.length - 1) {
				teamIndex = 0;
			} else {
				teamIndex++;
			}
		});

		let visitIndex = 0;
		let workingTimes = [];

		visits.forEach(_ => {
			for (let day = 0; day < maxDay; day++) {
				if (!workingTimes[day]) {
					workingTimes[day] = {};
				}
				teams.forEach((team, teamIndex) => {
					if (!workingTimes[day][team._id]) {
						workingTimes[day][team._id] = 0;
					}

					if (!planning[day]) {
						planning[day] = [];
					}

					if (!visits[visitIndex + teamIndex]) {
						return;
					}

					if (workingTimes[day][team._id] >= maxTime) {
						return;
					}

					if (
						workingTimes[day][team._id] +
							visits[visitIndex + teamIndex].duration >
						360
					) {
						return;
					}

					workingTimes[day][team._id] =
						workingTimes[day][team._id] +
						visits[visitIndex + teamIndex].duration;

					planning[day].push(visits[visitIndex + teamIndex]);
				});
				visitIndex += teams.length;
			}
		});

		let planningFormatted = {
			sector_id: req.params.sector,
			lanes: []
		};
		for (const day of planning) {
			let newDay = [];
			for await (let visit of day) {
				const visitFinal = await Visit.create(visit);
				newDay.push({visit_id: visitFinal._id});
			}
			planningFormatted.lanes.push(newDay);
		}

		const finalPlanning = await Planning.create(planningFormatted);

		res.status(200).json({
			status: 'success',
			planning_id: finalPlanning._id,
			planning: planningFormatted
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			error: err.message
		});
	}
};

exports.getPlanning = async (req, res) => {
	try {
		const planning = await Planning.find({
			sector_id: req.params.sector
		}).lean();

		console.log(planning);

		const formattedPlanning = {};
		formattedPlanning.sector_id = planning.sector_id;
		formattedPlanning.lanes = [];

		for (const day of planning[0].lanes) {
			let newDay = [];
			for await (let visit of day) {
				const visitData = await Visit.findById(visit.visit_id);
				const team = await Team.findById(visitData.team_id);
				const hotelData = await Hotel.findById(visitData.hotel_id);

				visit = {
					...visit,
					hotel_name: visitData.hotel_name,
					anomaly: hotelData.anomaly,
					rooms: hotelData.rooms,
					duration: visitData.duration
				};

				let teamData = [];
				for (let emp of team.team) {
					const empData = await Employee.findById(emp.staff_id);
					teamData.push({
						firstName: empData.firstName,
						lastName: empData.lastName
					});
				}
				visit = {...visit, team: teamData};
				newDay.push(visit);
			}
			formattedPlanning.lanes.push(newDay);
		}

		res.json({
			planning: formattedPlanning
		});
	} catch (err) {
		console.warn(err);
	}
};

exports.updatePlanning = async (req, res) => {
	try {
		const updatedPlanning = {
			lanes: []
		};
		req.body.lanes.forEach(lane => {
			let newDay = [];
			lane.cards.forEach(visit => {
				let el = {
					visit_id: visit.visit_id
				};
				newDay.push(el);
			});
			updatedPlanning.lanes.push(newDay);
		});

		await Planning.findByIdAndUpdate(req.params.id, updatedPlanning, {
			new: true,
			runValidators: true
		});

		res.json({
			status: 'success'
		});
	} catch (err) {
		console.warn(err);
	}
};
