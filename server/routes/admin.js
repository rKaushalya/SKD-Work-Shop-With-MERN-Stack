const AdminController = require('../controllers/AdminController');

const express = require("express");
var router = express.Router();

router.post("/add",AdminController.saveAdmin);

module.exports = router;