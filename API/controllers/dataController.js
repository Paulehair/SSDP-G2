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

		next();
	} catch (err) {
		console.warn(err);
	}
};

exports.importTeams = async (req, res) => {
	try {
		const data = JSON.parse(fs.readFileSync(`${__dirname}/../data/teams.json`));
		await Team.create(data.teams);

		console.log('💾 Data inserted successfully.');
		res.json({
			status: 'success'
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
