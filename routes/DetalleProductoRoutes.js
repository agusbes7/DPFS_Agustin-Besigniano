const express = require('express');
const router = express.Router();
const carro=require('../controllers/DetalleProductoController');

router.get('/detailProduct/:id',carro.show);

module.exports=router;
