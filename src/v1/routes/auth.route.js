const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth.controller');

router.post('/singup', authController.singUp);
router.post('/singin', authController.singIn);

module.exports = router;