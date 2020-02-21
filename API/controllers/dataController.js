const Sector = require('./../models/sectorModel');
const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');
const Team = require('./../models/teamModel');
const fs = require('fs');

exports.importSectors = async (req, res, next) => {
	try {
		const data = JSON.parse(
			fs.readFileSync(`${__dirname}/../data/sectors.json`)
		);

		await Sector.create(data.sectors);
		next();
	} catch (err) {
		console.warn(err);
	}
};

exports.importHotels = async (req, res, next) => {
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
		next();
	} catch (err) {
		console.warn(err);
	}
};

exports.importEmployees = async (req, res, next) => {
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
		next();
	} catch (err) {
		console.warn(err);
	}
};

exports.importTeams = async (req, res) => {
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
		const teams = await Team.create(data.teams);

		console.log('💾 Data inserted successfully.');
		res.json({
			status: 'success',
			teams
		});
	} catch (err) {
		console.warn(err);
	}
};

exports.deleteData = async (req, res) => {
	try {
		await Sector.deleteMany();
		await Hotel.deleteMany();
		await Employee.deleteMany();
		console.log('🗑 Data deleted successfully.');
		res.json({
			status: 'success'
		});
	} catch (err) {
		console.warn(err);
	}
};
