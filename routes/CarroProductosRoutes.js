const express = require('express');
const router = express.Router();
const carro=require('../controllers/CarroProductosController');

router.get('/confirmarCompra',carro.show);

module.exports=router;
