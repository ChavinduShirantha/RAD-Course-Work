const express = require('express');
const ContactController = require('../controller/UserController');
const router = express.Router();


router.post('/save', ContactController.saveUserDetails);

module.exports =router;
