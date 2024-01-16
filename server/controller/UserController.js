const User = require("../model/User");

const UserController = {
    saveUserDetails: async function (req, res, next) {
        try {
            const requestedData = req.body;

            const product = await User.create(requestedData);

            res.status(200).json("User Added Successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },
    getAllUsers: async function (req, res, next) {
        try {
            const userList = await User.find();
            res.status(200).json(userList);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }
}

module.exports = UserController;
