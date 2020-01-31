const router = require('express').Router();
const visitController = require('./../controllers/visitController');

router.route('/').post(visitController.getVisit);

module.exports = router;
