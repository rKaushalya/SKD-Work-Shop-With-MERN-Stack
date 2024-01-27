const mongoose = require('mongoose');

const AdminModel = mongoose.Schema(
    {
        "username": {
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
    {versionKey:false}
);

const admin = mongoose.model('admin',AdminModel);

module.exports = admin;