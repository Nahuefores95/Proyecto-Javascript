const express = require('express');
const router = express.Router();
const controller = require('../controllers/productscontroller');

router.get('/mayor', controller.mayor);
router.get('/menor', controller.menor);

module.exports = router;