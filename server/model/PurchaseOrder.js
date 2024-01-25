const mongoose = require('mongoose');

const PurchaseOrderModel = mongoose.Schema(
    {
        "id":{
            require: true,
            type: Number,
            unique: true,
            index: true
        },
        "productID": {
            require: true,
            type: String
        },
        "productImage": {
            require: true,
            type: String
        },
        "productName": {
            require: true,
            type: String
        },
        "unitPrice": {
            require: true,
            type: Number
        },
        "qty": {
            require: true,
            type: Number
        },
        "TotalPrice": {
            require: true,
            type: Number
        },
        "SubTotal": {
            require: true,
            type: Number
        }
    },
    {versionKey: false}
);

const PurchaseOrder = mongoose.model('PurchaseOrder', PurchaseOrderModel);

module.exports = PurchaseOrder;
