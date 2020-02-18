const router = require('express').Router();
const hotelController = require('./../controllers/hotelController');

// Uncomment route to import Hotels data
// router.route('/import').get(hotelController.importHotels);

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
