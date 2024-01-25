const BookingController = require('../controllers/BookingController');

const express = require("express");
var router = express.Router();

router.post("/add",BookingController.addBooking);
router.get("/all",BookingController.getBooking);

module.exports = router;