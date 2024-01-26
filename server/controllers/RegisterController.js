const Register = require('../model/RegisterModel');

const RegisterController = {
  newRegister: async function (req, res, next) {
      try {
          const registerData = req.body;
          const register = await Register.create(registerData);
          res.status(200).json(register);
      }catch (e) {
          console.error(e);
          res.status(500).json({error : 'Something went wrong.!'});
      }
  }
}

module.exports = RegisterController;