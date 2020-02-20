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
 *      "_id": "5e4be5e0e72a3700899b9ecb",
 *      "uuid": 290,
 *      "name": "1ère Classe Chelles",
 *      "address": "4 rue de l'Ormeteau",
 *      "zipCode": 77500,
 *      "city": "CHELLES",
 *      "status": "0",
 *      "rooms": 10,
 *      "lastVisit": "2019-08-21T22:00:00.000Z",
 *      "anomaly": 29.1,
 *      "sector_id": "5e4bbcbd19a35001d2cdcbae",
 *      "__v": 0
 *    },
 *     {
 *       ...
 *     }]
 */

router
	.route('/')
	.get(hotelController.getHotels)
	.post(hotelController.createHotel);

router.route('/list/:sector').get(hotelController.getHotelList);

router
	.route('/:id')
	.get(hotelController.getHotel)
	.patch(hotelController.updateHotel)
	.delete(hotelController.deleteHotel);

module.exports = router;
