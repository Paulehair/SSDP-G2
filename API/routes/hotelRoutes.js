const router = require('express').Router();
const hotelController = require('./../controllers/hotelController');
const authController = require('./../controllers/authController');

router
	.route('/')
	.get(hotelController.getHotels)
	.post(hotelController.createHotel);

router
	.route('/:id')
	.get(hotelController.getHotel)
	.patch(hotelController.updateHotel)
	.delete(hotelController.deleteHotel);

module.exports = router;
