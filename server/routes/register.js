const RegisterController = require('../controllers/RegisterController');

const express = require("express");
var router = express.Router();

router.post("/add",RegisterController.newRegister);

module.exports = router;