const BookingController = require('../controllers/AddBookingController');

const express = require("express");
var router = express.Router();

router.post("/add",BookingController.addBooking);

module.exports = router;