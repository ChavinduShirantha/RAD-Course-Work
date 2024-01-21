var express = require('express');
var router = express.Router();

const {productsList} = require('../constants/constants');

const ProductController = require("../controller/ProductController");

router.post('/save', ProductController.saveProductDetails);

router.get('/all', ProductController.getAllProducts);

/*router.get('/all', function(req, res, next) {
    res.send(productsList);
});*/

module.exports = router;
