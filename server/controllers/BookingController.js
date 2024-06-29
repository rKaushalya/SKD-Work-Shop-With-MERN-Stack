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
    },
    deleteBooking : async function (req, res, next) {
        try {
            const email = req.params.email;
            const result = await Booking.deleteOne({email : email});
            if (result.deletedCount === 0){
                res.status(404).json({error : 'Booking Not Found.!'});
            }
            res.status(200).json({message : 'Booking Cancel Successfully.!'});
        }catch (e) {
            console.error('Something Went Wrong.!',e);
        }
    },
    findPendingBooking: async function (req, res, next) {
        try {
            const booking = await Booking.find({status: "Pending"});
            res.status(200).json(booking);
        } catch (e) {
            console.error('Something Went Wrong.!');
        }
    },
    findAcceptedBooking: async function (req, res, next) {
        try {
            const booking = await Booking.find({status: "Accept"});
            res.status(200).json(booking);
        } catch (e) {
            console.error('Something Went Wrong.!');
        }
    }
}

module.exports = BookingController;