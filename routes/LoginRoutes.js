const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');

router.get('/Login', LoginController.show);
router.post('/Login',LoginController.store);

module.exports = router;