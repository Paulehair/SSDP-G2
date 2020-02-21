const router = require('express').Router();
const planningController = require('./../controllers/planningController');

router
	.route('/:id')
	.get(planningController.getPlanning)
	.patch(planningController.updatePlanning);

router.route('/create/:sector').get(planningController.createPlanning);

module.exports = router;
