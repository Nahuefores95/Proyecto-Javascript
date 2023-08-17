const path = require('path');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/productscontroller');
const logs = require('../middlewares/logger');
const upload = require('../middlewares/storage');
const errorValidator = require('../utils/errors');


router.get('/listar', logs, controller.listar);
router.get('/listar/category', logs, controller.category);
router.get('/listar/category/:category', logs, controller.categoryOnce);
router.get('/listar/price/menor', logs, controller.lower);
router.get('/listar/price/mayor', logs, controller.higher);
router.get('/detalle/:id', logs, controller.detalle);
//router.put('/update/:id', logs, errorValidator, controller.update); No me funciona porque no me toma el req.body, me pasa lo mismo si pongo en el post antes del upload.single
router.put('/update/:id', logs, controller.update);
router.post('/crear', upload.single('image'), errorValidator, controller.crear);
router.get('/search', logs, controller.seeker);

module.exports = router;