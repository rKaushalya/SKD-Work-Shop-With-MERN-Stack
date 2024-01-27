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
    },
    findBooking: async function (req, res, next) {
        try {
            const email = req.params.email;
            const booking = await Booking.find({email: email});
            res.status(200).json(booking);
        } catch (e) {
            console.error('Something Went Wrong.!');
        }
    },
    updateBooking : async function (req,res,next) {
        try {
            const email = req.params.email;
            const BookingData = req.body;
            const updatedBooking = await Booking.findOneAndUpdate({
                email: email
            },BookingData, {new : true});

            if (!updatedBooking){
                return res.status(404).json({error : 'Product Not Found.!'});
            }

            res.status(200).json(updatedBooking);

        }catch (e) {
            console.error('Something Went Wrong.!');
        }
    }
}

module.exports = BookingController;