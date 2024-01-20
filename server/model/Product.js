const mongoose = require('mongoose');

const ProductModel = mongoose.Schema(
    {
        "id":{
            require: true,
            type: Number,
            unique: true,
            index: true
        },
        "description": {
            require: true,
            type: String
        },
        "name": {
            require: true,
            type: String
        },
        "price": {
            require: true,
            type: String
        },
        "currency": {
            require: true,
            type: String
        },
        "image": {
            require: true,
            type: String
        },
        "productState": {
            require: true,
            type: String
        }
    },
    {versionKey: false}
);

const Product = mongoose.model('Product', ProductModel);

module.exports = Product;
