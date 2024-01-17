const express = require('express');
const UserController = require('../controller/UserController');
const router = express.Router();


router.post('/save', UserController.saveUserDetails);

router.get('/all', UserController.getAllUsers);

router.delete('/delete/:id',UserController.deleteUserDetail);

module.exports =router;
