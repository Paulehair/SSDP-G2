const PDFDocument = require('pdfkit');
const Hotel = require('./../models/hotelModel');
const Employee = require('./../models/employeeModel');

exports.generatePdf = async (req, res, next) => {
	try {
		let date = new Date();
		date.setMonth(date.getMonth() - 3);
		let sector = req.params.sector;
		if (sector !== 'Paris') {
			if (sector.length > 2) {
				sector = `${sector[0]}${sector[1]}/${sector[2]}${sector[3]}`;
			}
		}
		const hotels = await Hotel.aggregate([
			{
				$match: {
					// anomaly: {$gte: 45},
					lastVisit: {$lt: date},
					sector: {$eq: sector}
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

		const employees = await Employee.find({sector: sector});

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

		date = new Date();
		const data = planning;
		// sector = data.map(day => {
		// 	return day.visits[0].sector;
		// });

		const timeConvert = n => {
			let num = n;
			let hours = num / 60;
			let rhours = Math.floor(hours);
			let minutes = (hours - rhours) * 60;
			let rminutes = Math.round(minutes);
			return `${rhours}h${rminutes}`;
		};

		console.log(planning[0]);

		let header = `
        Planning généré le ${date.getDate()}/${date.getMonth() +
			1}/${date.getFullYear()}\n
        Secteur ${sector}\n`;

		for (let i = 0; i < data.length; i++) {
			let visits = data[i];
			let day = `Jour ${i + 1}:\n`;
			header += day;
			for (let i = 0; i < visits.length; i++) {
				let hotel = visits[i];
				let content = `Visite ${i + 1} :\n
    Hôtel: ${hotel.name}\n
    Adresse: ${hotel.address}\n
    Code postal: ${hotel.zipCode}\n
    Ville: ${hotel.city}\n
    Nombre de chambres: ${hotel.rooms}\n
    Temps de visite estimé: ${timeConvert(hotel.rooms * 5 + 15)}\n
    Pourcentage d'anomalies: ${hotel.anomaly}%\n
    Date de derniere visite: ${hotel.lastVisit}\n
    Equipe d'intervenants: `;
				header += content;
				let employees = hotel.team;
				employees.forEach(team => {
					let text = `${team.firstName} ${team.lastName}; `;
					header += text;
				});
				header += '\n';
			}
		}

		var myDoc = new PDFDocument({bufferPages: true});
		let buffers = [];
		myDoc.on('data', buffers.push.bind(buffers));
		myDoc.on('end', () => {
			let pdfData = Buffer.concat(buffers);
			res.end(pdfData);
		});

		myDoc
			.font('Helvetica')
			.fontSize(12)
			.text(header);
		myDoc.end();
	} catch (err) {
		res.json({
			status: 'fail',
			error: err.message
		});
	}
};
