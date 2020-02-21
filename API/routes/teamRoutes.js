const router = require('express').Router();
const teamController = require('./../controllers/teamController');

router.route('/').get(teamController.getTeams);

module.exports = router;
