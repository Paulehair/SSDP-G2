const router = require('express').Router();
const visitController = require('./../controllers/visitController');

router.route('/').get(visitController.getVisit);

module.exports = router;
