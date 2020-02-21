const router = require('express').Router();
const hotelController = require('./../controllers/hotelController');
const authController = require('./../controllers/authController');

// Uncomment route to import Hotels data
// router.route('/import').get(hotelController.importHotels);

/**
 * @apiDefine admin User access only
 * This operation belongs to to the admin group.
 */

/**
 * @api {get} /hotels Request list of all hotels
 * @apiName getHotels
 * @apiGroup Hotels
 * @apiVersion 0.1.0
 * @apiPermission none
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "_id": "5e4be5e0e72a3700899b9ecb",
 *       "uuid": 290,
 *       "name": "1ère Classe Chelles",
 *       "address": "4 rue de l'Ormeteau",
 *       "zipCode": 77500,
 *       "city": "CHELLES",
 *       "status": "0",
 *       "rooms": 10,
 *       "lastVisit": "2019-08-21T22:00:00.000Z",
 *       "anomaly": 29.1,
 *       "sector_id": "5e4bbcbd19a35001d2cdcbae",
 *       "__v": 0
 *    },
 *    {
 *      ...
 *    }]
 */

/**
 * @api {post} /hotels Create an hotel
 * @apiName createHotel
 * @apiGroup Hotels
 * @apiVersion 0.1.0
 * @apiPermission admin
 *
 * @apiSuccess {String} id This is the auto generated id for an Hotel
 * @apiSuccess {String} name Name of an Hotel
 * @apiSuccess {String} address Address of an Hotel
 * @apiSuccess {Number} zipCode ZipCode of an Hotel
 * @apiSuccess {String} city City of an Hotel
 * @apiSuccess {String} status Status of an Hotel
 * @apiSuccess {Number} rooms Total of rooms for an Hotel
 * @apiSuccess {Date} lastVisit Date of last visit
 * @apiSuccess {Number} anomaly Grade for anomaly
 * @apiSuccess {String} sector_id Sector id for an Hotel
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5e4e56952784380036af888d",
 *       "uuid": 26500133,
 *       "name": "1ère Classe Conflans - ESPERER",
 *       "address": "11 rue des Belles Hâtes",
 *       "zipCode": 78700,
 *       "city": "CONFLANS-SAINTE-HONORINE",
 *       "status": "0",
 *       "rooms": 9,
 *       "lastVisit": "2019-09-22T22:00:00.000Z",
 *       "anomaly": 32.33,
 *       "sector_id": "5e4e56932784380036af8889",
 *       "__v": 0
 *     }
 */

router
	.route('/')
	.get(hotelController.getHotels)
        .post(hotelController.createHotel);

/**
 * @api {get} /hotels/:id Request hotel information
 * @apiName getOneHotel
 * @apiGroup Hotels
 * @apiVersion 0.1.0
 * @apiPermission none
 *
 * @apiSuccess {String} id This is the auto generated id for the Hotel
 * @apiSuccess {String} name Name of the Hotel
 * @apiSuccess {String} address Address of the Hotel
 * @apiSuccess {Number} zipCode ZipCode of the Hotel
 * @apiSuccess {String} city City of the Hotel
 * @apiSuccess {String} status Status of the Hotel
 * @apiSuccess {Number} rooms Total of rooms for the Hotel
 * @apiSuccess {Date} lastVisit Date of last visit
 * @apiSuccess {Number} anomaly Grade for anomaly
 * @apiSuccess {String} sector_id Sector id of the Hotel
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5e4e56952784380036af888d",
 *       "uuid": 26500133,
 *       "name": "1ère Classe Conflans - ESPERER",
 *       "address": "11 rue des Belles Hâtes",
 *       "zipCode": 78700,
 *       "city": "CONFLANS-SAINTE-HONORINE",
 *       "status": "0",
 *       "rooms": 9,
 *       "lastVisit": "2019-09-22T22:00:00.000Z",
 *       "anomaly": 32.33,
 *       "sector_id": "5e4e56932784380036af8889",
 *       "__v": 0
 *     }
 */

/**
 * @api {patch} /hotels/:sector Update hotel information
 * @apiName updateOneHotel
 * @apiGroup Hotels
 * @apiVersion 0.1.0
 * @apiPermission admin
 *
 * @apiParam {Number} id Param to select an hotel to patch
 *
 * @apiSuccess {String} id This is the auto generated id for an Hotel
 * @apiSuccess {String} name Name of the Hotel
 * @apiSuccess {String} address Addres of the Hotel
 * @apiSuccess {Number} zipCode ZipCode of the Hotel
 * @apiSuccess {String} city City of the hotel
 * @apiSuccess {String} status Status of the Hotel
 * @apiSuccess {Number} rooms Total of rooms of the Hotel
 * @apiSuccess {Date} lasVisit Date of last visit
 * @apiSuccess {Number} anomaly Grade of anomaly
 * @apiSuccess {String} sector_id Secctor id for the Hotel
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5e4e56952784380036af888d",
 *        "uuid": 26500133,
 *        "name": "1ère Classe Conflans - ESPERER",
 *        "address": "11 rue des Belles Hâtes",
 *        "zipCode": 78700,
 *        "city": "CONFLANS-SAINTE-HONORINE",
 *        "status": "0",
 *        "rooms": 9,
 *        "lastVisit": "2019-09-22T22:00:00.000Z",
 *        "anomaly": 32.33,
 *        "sector_id": "5e4e56932784380036af8889",
 *        "__v": 0
 */

/**
 * @api {delete} /hotels/:id Delete one hotel
 * @apiName deleteOneHotel
 * @apiGroup Hotels
 * @apiVersion 0.1.0
 * @apiPermission admin
 *
 * @apiParam {Number} id Param to select an hotel to delete
 *
 * @apiSuccess {String} id This is the auto generated id for the Hotel
 * @apiSuccess {String} name Name of the Hotel
 * @apiSuccess {String} address Address of the Hotel
 * @apiSuccess {Number} zipCode ZipCode of the Hotel
 * @apiSuccess {String} city City of the Hotel
 * @apiSuccess {String} status Status of the Hotel
 * @apiSuccess {Number} rooms Total of rooms of the Hotel
 * @apiSuccess {Date} lastvisit Date of last visit
 * @apiSuccess {Number} anomaly Grade of anomaly
 * @apiSuccess {String} sector_id Sector id of the Hotel
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5e4e56952784380036af888d",
 *       "uuid": 26500133,
 *       "name": "1ère Classe Conflans - ESPERER",
 *       "address": "11 rue des Belles Hâtes",
 *       "zipCode": 78700,
 *       "city": "CONFLANS-SAINTE-HONORINE",
 *       "status": "0",
 *       "rooms": 9,
 *       "lastVisit": "2019-09-22T22:00:00.000Z",
 *       "anomaly": 32.33,
 *       "sector_id": "5e4e56932784380036af8889",
 *       "__v": 0
 *    }
 */

// router.route('/list/:sector').get(hotelController.getHotelList);

router
	.route('/:id')
	.get(hotelController.getHotel)
	.patch(hotelController.updateHotel)
	.delete(hotelController.deleteHotel);

module.exports = router;
