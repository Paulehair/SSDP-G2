const Sector = require('./../models/sectorModel');
const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');
const Team = require('./../models/teamModel');
const Visit = require('./../models/visitModel');
const Planning = require('./../models/planningModel');
const fs = require('fs');

const importSectors = async () => {
	try {
		const data = JSON.parse(
			fs.readFileSync(`${__dirname}/../data/sectors.json`)
		);

		await Sector.create(data.sectors);
		console.log('Keep waiting...');
		importHotels();
	} catch (err) {
		console.warn(err);
	}
};

const importHotels = async () => {
	try {
		const data = JSON.parse(
			fs.readFileSync(`${__dirname}/../data/hotels-formatted.json`)
		);
		const sectors = await Sector.find();
		data.hotels.forEach(hotel => {
			const hotelSector = sectors.find(
				sector => sector.zone === hotel.sector_id
			);
			hotel.sector_id = hotelSector._id;
		});

		await Hotel.create(data.hotels);
		console.log('Keep waiting...');
		importEmployees();
	} catch (err) {
		console.warn(err);
	}
};

const importEmployees = async () => {
	try {
		const data = JSON.parse(
			fs.readFileSync(`${__dirname}/../data/employees.json`)
		);

		const sectors = await Sector.find();
		data.employees.forEach(employee => {
			const employeeSector = sectors.find(
				sector => sector.zone === employee.sector_id
			);
			employee.phone = '0612345678';
			employee.sector_id = employeeSector._id;
		});

		await Employee.create(data.employees);

		// console.log('💾 Data inserted successfully.');
		// res.json({
		// 	status: 'success'
		// });
		console.log('Keep waiting...');
		importTeams();
	} catch (err) {
		console.warn(err);
	}
};

const importTeams = async () => {
	try {
		const data = JSON.parse(fs.readFileSync(`${__dirname}/../data/teams.json`));
		const sectors = await Sector.find();
		const employees = await Employee.find();

		data.teams.forEach(team => {
			const teamSector = sectors.find(sector => sector.zone === team.sector_id);
			team.sector_id = teamSector._id;
			team.team.forEach(employee => {
				const teamEmployee = employees.find(
					el => el.email === employee.staff_id
				);
				employee.staff_id = teamEmployee._id;
			});
		});
		await Team.create(data.teams);
		console.log('💾 Data inserted successfully.');
		res.json({
			status: 'success'
		});
	} catch (err) {
		console.warn(err);
	}
};

const importPlanning = async () => {
	try {
		const planningSectors = await Sector.find();

		for await (const pSector of planningSectors) {
			let date = new Date();
			date.setMonth(date.getMonth() - 3);
			const teams = await Team.find({sector_id: pSector}).lean();

			const hotels = await Hotel.find({
				sector_id: pSector,
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

			// const files = await getFilePaths();
			let planningFormatted = {
				sector_id: pSector,
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

			await Planning.create(planningFormatted);
			console.log('Keep waiting...');
		}

		console.log('💾 Data inserted successfully.');
	} catch (err) {
		console.warn(err);
	}
};

importSectors();
