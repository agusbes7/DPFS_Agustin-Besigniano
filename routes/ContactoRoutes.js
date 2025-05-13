const express = require('express');
const router = express.Router();
const contacto=require('../controllers/ContactoController');
router.get('/FormularioDeContacto',contacto.show);
router.post('/FormularioDeContacto',contacto.store);
module.exports=router;
