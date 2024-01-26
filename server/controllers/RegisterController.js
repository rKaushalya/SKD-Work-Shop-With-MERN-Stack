const Register = require('../model/RegisterModel');

const RegisterController = {
    newRegister: async function (req, res, next) {
        try {
            const registerData = req.body;
            const register = await Register.create(registerData);
            res.status(200).json(register);
        } catch (e) {
            console.error(e);
            res.status(500).json({error: 'Something went wrong.!'});
        }
    },
    checkUser: async function (req, res, next) {
        try {
            const username = req.params.username;
            const user = await Register.find({username: username});

            if (user.length > 0) {
                res.status(200).json({check: true});
            } else {
                res.status(200).json({check: false});
            }
        } catch (e) {
            console.error('Something Went Wrong.!');
        }
    }
}

module.exports = RegisterController;