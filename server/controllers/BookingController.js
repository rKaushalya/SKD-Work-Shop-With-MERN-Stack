const Booking = require('../model/AddBooking');

const BookingController = {
    addBooking : async function (req, res, next) {
        try {
            const bookingData = req.body;
            const booking = await Booking.create(bookingData);
            res.status(200).json(booking);
        }catch (e) {
            console.error(e);
            res.status(500).json({error : 'Something went wrong.!'});
        }
    },
    getBooking : async function (req,res,next) {
        try {
            const booking = await Booking.find();
            res.status(200).json(booking);
        }catch (e) {
            console.error('Something Went Wrong.!');
        }
    }
}

module.exports = BookingController;