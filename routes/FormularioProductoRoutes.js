const express = require('express');
const router = express.Router();
const form=require('../controllers/FormularioProductController');

router.get('/formularioDeCarga' ,form.create);
router.get('/formularioDeCarga/:id' ,form.updateDestroy);

module.exports=router;
