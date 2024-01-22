const Product = require("../model/Product");

const ProductController ={
    saveProductDetails: async function (req, res, next) {
        try {
            const requestedData = req.body;

            const product = await Product.create(requestedData);

            res.status(200).json("Product Added Successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },
    getAllProducts: async function (req, res, next) {
        try {
            const productList = await Product.find();
            res.status(200).json(productList);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },
    deleteProductDetail: async function (req, res, next) {
        try {
            const id = req.params.id;
            const result = await Product.findOneAndDelete({id: id});
            if (result.deletedCount === 0) {
                res.status(404).json({error: 'Product Not Found'});
            }
            res.status(200).json('Product Delete Successfully')
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },
    searchProduct: async function (req, res, next) {
        try {
            const id = req.params.id;
            const product = await Product.find({id: id});

            res.status(200).json(product);

        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }
}

module.exports = ProductController;
