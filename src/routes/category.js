const express = require('express');
const router = express.Router();
const controller = require('../controllers/productscontroller');

router.get('/', controller.category);
router.get('/:category', controller.categories);

module.exports = router;