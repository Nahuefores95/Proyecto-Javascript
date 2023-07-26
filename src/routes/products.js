const express = require('express');
const router = express.Router();
const controller = require('../controllers/productscontroller');

router.get('/', controller.all);
router.get('/id/:id', controller.one);
router.post('/crear', controller.crear);

module.exports = router;