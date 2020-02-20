const router = require('express').Router();
const fileController = require('./../controllers/fileController');

/**
 * @api {get} /exportPlanning Request planning file
 * @apiName getPlanning
 * @apiGroup Planning
 * @apiVersion 0.1.0
 *
 * @apiParam {String} sector Name of the sector
 *
 * @apiSuccess {String} planning Planning for a week by sector
*/
router.route('/:sector').get(fileController.generatePdf);

module.exports = router;
