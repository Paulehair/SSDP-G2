const router = require('express').Router();
const hotelController = require('./../controllers/hotelController');

router
	.route('/')
	.get(hotelController.getHotels)
	.post(hotelController.createHotel);

router.route('/list').get(hotelController.getHotelList);

router
	.route('/:id')
	.get(hotelController.getHotel)
	.patch(hotelController.updateHotel)
	.delete(hotelController.deleteHotel);

module.exports = router;
