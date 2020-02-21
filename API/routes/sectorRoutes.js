const router = require('express').Router();
const sectorController = require('./../controllers/sectorController');

//Uncomment route to import Sector data
// router.route('/import').get(sectorController.importSectors);

/**
 * @apiDefine admin User access only
 * This operation belongs to the admin group.
 */

/**
 * @api {get} /sectors Request list of all sectors
 * @apiName getSector
 * @apiGroup Sectors
 * @apiVersion 0.1.0
 * @apiPermission none
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "_id": "5e4e56932784380036af8886",
 *       "zone": "75",
 *       "__v": 0
 *     },
 *     {
 *      ...
 *     }]
 */

 /**
 * @api {post} /sectors Create a sector
 * @apiName createSector
 * @apiGroup Sectors
 * @apiVersion 0.1.0
 * @apiPermission admin
 *
 * @apiSuccess {String} id This is the auto generated id for a Sector
 * @apiSuccess {Number} zone Stand for the district
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5e4e56932784380036af8886",
 *       "zone": "75",
 *       "__v": 0
 */

router
	.route('/')
	.get(sectorController.getSector)
	.post(sectorController.createSector);

/**
 * @api {patch} /sectors/id: Update sector information
 * @apiName updateOneSector
 * @apiGroup Sectors
 * @apiVersion 0.1.0
 * @apiPermission admin
 *
 * @apiParam {Number} id Sector Id
 *
 * @apiSuccess {String} id This is the auto generated id for a Sector
 * @apiSuccess {Number} zone Stand for the district
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5e4e56932784380036af8886",
 *       "zone": "75",
 *       "__v": 0
 *     }
 */

/**
 * @api {delete} /sectors/:id Delete a sector
 * @apiName deleteOneSector
 * @apiGroup Sectors
 * @apiVersion 0.1.0
 * @apiPermission amdin
 *
 * @apiParam {Number} id Sector Id
 *
 * @apiSuccess {String} id This is the auto generated id for a Sector
 * @apiSuccess {Number} zone Stand for the district
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5e4e56932784380036af8886",
 *       "zone": "75",
 *       "__v": 0
 *     }
 */

router
	.route('/:id')
	.patch(sectorController.updateSector)
	.delete(sectorController.deleteSector);

module.exports = router;
