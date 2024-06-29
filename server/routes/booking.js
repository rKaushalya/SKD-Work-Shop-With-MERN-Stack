const BookingController = require('../controllers/BookingController');

const express = require("express");
var router = express.Router();

router.post("/add",BookingController.addBooking);
router.get("/all",BookingController.getBooking);
router.get("/find/:email",BookingController.findBooking);
router.put("/put/:email",BookingController.updateBooking);
router.delete("/delete/:email",BookingController.deleteBooking);
router.get("/findPendingBooking",BookingController.findPendingBooking);
router.get("/findAcceptedBooking",BookingController.findAcceptedBooking);

module.exports = router;