const UserController = {
    saveUserDetails: function (req, res, next) {
        const requestedData = req.body;
        console.log(requestedData);
        res.send("User Added Successfully!");
    }
}

module.exports = UserController;
