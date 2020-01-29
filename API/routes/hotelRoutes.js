const router = require('express').Router();
const hotelController = require('./../controllers/hotelController');

/* 
  Staff route for path /api/hotels/
  @params: none
  @get: 
    @returns [{}] all hotels
  @post: 
    create a new hotel
    @returns {} response with confirmation
*/
router.route('/').get(hotelController.getHotels);

/* 
  Staff route for path /api/hotels/:id
  @params: id String
  @get:
    @returns {} hotel with id from param
  @patch: 
    update hotel with id from param
    @returns {} response with confirmation
  @delete:
    delete hotel with id from param
    @returns {} response with confirmation
*/
router
	.route('/:id')
	.get(hotelController.getHotel)
	.patch(hotelController.updateHotel)
	.delete(hotelController.deleteHotel);

module.exports = router;
