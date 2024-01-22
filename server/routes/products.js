var express = require('express');
var router = express.Router();

const {productsList} = require('../constants/constants');

const ProductController = require("../controller/ProductController");

router.post('/save', ProductController.saveProductDetails);

router.get('/all', ProductController.getAllProducts);

router.delete('/delete/:id',ProductController.deleteProductDetail);

router.get('/find/:id',ProductController.searchProduct);

router.put('/update/:id',ProductController.updateProduct);
/*router.get('/all', function(req, res, next) {
    res.send(productsList);
});*/

module.exports = router;
