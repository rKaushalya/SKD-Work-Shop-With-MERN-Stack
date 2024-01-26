const mongoose = require('mongoose');

const RegisterModel = mongoose.Schema(
    {
        "username": {
            require: true,
            type: String,
            unique: true,
            index: true
        },
        "email": {
            require: true,
            type: String
        },
        "password": {
            require: true,
            type: String
        }
    },
    {versionKey: false}
);

const register = mongoose.model('register',RegisterModel);

module.exports = register;