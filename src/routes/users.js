const express = require('express');
const router = express.Router();
const controller = require('../controllers/productscontroller');

router.get('/nuevo', controller.nuevo);


module.exports = router;