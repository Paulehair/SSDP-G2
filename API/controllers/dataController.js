const fs = require('filesystem');

exports.importHotels = async (req, res) => {
	fs.readFile('./../data/hotels-formatted.json', (err, data) => {
		if (err) throw err;
		console.log(data);
	});
};
