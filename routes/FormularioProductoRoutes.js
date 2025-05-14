const express = require('express');
const router = express.Router();
const form=require('../controllers/FormularioProductController');

router.get('/admin/ABMproductos' ,form.create);
router.get('/admin/ABMproductos/:id' ,form.updateDestroy);

module.exports=router;
