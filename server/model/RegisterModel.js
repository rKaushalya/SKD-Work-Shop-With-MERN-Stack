const mongoose = require('mongoose');

const RegisterModel = mongoose.Schema(
    {
        "email": {
            require: true,
            type: String,
            unique: true,
            index: true
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