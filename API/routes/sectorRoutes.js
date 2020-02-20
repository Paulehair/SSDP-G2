const router = require('express').Router();
const sectorController = require('./../controllers/sectorController');

router
	.route('/')
	.get(sectorController.getSector)
	.post(sectorController.createSector);

router
	.route('/:id')
	.patch(sectorController.updateSector)
	.delete(sectorController.deleteSector);

module.exports = router;
