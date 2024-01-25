const mongoose = require('mongoose');

const BookingModel = mongoose.Schema(
    {
        "name": {
            require: true,
            type: String,
        },
        "email": {
            require: true,
            type: String,
            unique: true,
            index: true
        },
        "number": {
            require: true,
            type: String
        },
        "city": {
            require: true,
            type: String
        },
        "message": {
            require: true,
            type: String
        }
    },
    {versionKey: false}
);

const Booking = mongoose.model('Booking', BookingModel);

module.exports = Booking;