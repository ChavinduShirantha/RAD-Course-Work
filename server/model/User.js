const mongoose = require('mongoose');

const UserModel = mongoose.Schema(
    {
        "userID":{
            require: true,
            type: Number,
            unique: true,
            index: true
        },
        "firstName": {
            require: true,
            type: String
        },
        "lastName": {
            require: true,
            type: String
        },
        "contact": {
            require: true,
            type: String
        },
        "dateOfBirth": {
            require: true,
            type: String
        },
        "address": {
            require: true,
            type: String
        },
        "nic": {
            require: true,
            type: String
        },
        "country": {
            require: true,
            type: String
        },
        "email": {
            require: true,
            type: String
        },
        "userName": {
            require: true,
            type: String,
        },
        "password": {
            require: true,
            type: String
        }
    },
    {versionKey: false}
);

const User = mongoose.model('User', UserModel);

module.exports = User;
