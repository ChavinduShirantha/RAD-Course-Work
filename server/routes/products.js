var express = require('express');
var router = express.Router();

const ProductController = require("../controller/ProductController");

router.post('/save', ProductController.saveProductDetails);


module.exports = router;
