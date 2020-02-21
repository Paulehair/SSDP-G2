const router = require('express').Router();
const planningController = require('./../controllers/planningController');

router
	.route('/:sector')
	.get(planningController.getPlanning)
	.patch(planningController.updatePlanning);

module.exports = router;
