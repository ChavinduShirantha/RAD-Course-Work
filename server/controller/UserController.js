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
    },

    deleteUserDetail: async function (req, res, next) {
        try {
            const userID = req.params.userID;
            const result = await User.findOneAndDelete({id: userID});
            if (result.deletedCount === 0) {
                res.status(404).json({error: 'User Not Found'});
            }
            res.status(200).json('User Delete Successfully')
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    searchUser: async function (req, res, next) {
        try {
            const userID = req.params.userID;
            const product = await User.find({id: userID});

            res.status(200).json(product);

        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }

}

module.exports = UserController;
