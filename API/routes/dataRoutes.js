const router = require('express').Router();
const dataController = require('../controllers/dataController');

router
	.route('/import')
	.get(
		dataController.importSectors,
		dataController.importHotels,
		dataController.importEmployees,
		dataController.importTeams,
		dataController.importPlanning
	);

router.route('/delete').get(dataController.deleteData);

module.exports = router;
