const express = require('express');
const router = express.Router();
const form=require('../controllers/ListasProductController');

router.get('/Products/:seccion' ,form.index);




module.exports=router;
