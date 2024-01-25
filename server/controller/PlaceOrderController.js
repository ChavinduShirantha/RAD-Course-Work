const PurchaseOrder = require("../model/PurchaseOrder");


const PlaceOrderController = {
    saveOrder: async function (req, res, next) {
        try {
            const requestedData = req.body;

            const product = await PurchaseOrder.create(requestedData);

            res.status(200).json("Order Purchase Successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }
}

module.exports = PlaceOrderController;
