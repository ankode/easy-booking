const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.get('/', trainController.getTrain);
router.post('/', trainController.createTrain);

module.exports = router;