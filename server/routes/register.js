const RegisterController = require('../controllers/RegisterController');

const express = require("express");
var router = express.Router();

router.post("/add",RegisterController.newRegister);
router.get("/check/:username",RegisterController.checkUser);

module.exports = router;