const router = require('express').Router()
const sectorController = require('./../controllers/sectorController')

router
  .route('/')
  .get(sectorController.getSector)
  .post(sectorController.createSector)

module.exports = router
