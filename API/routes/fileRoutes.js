const router = require('express').Router();
const fileController = require('./../controllers/fileController');

router.route('/:sector').get(fileController.generatePdf);

module.exports = router;
