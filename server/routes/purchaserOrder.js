const express = require('express');
const PlaceOrderController = require("../controller/PlaceOrderController");
const router = express.Router();

router.post('/save', PlaceOrderController.saveOrder);

module.exports =router;
