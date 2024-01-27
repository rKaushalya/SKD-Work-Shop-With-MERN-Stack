const Admin = require('../model/AdminModel');

const AdminController = {
    saveAdmin : async function (req, res, next) {
        try {
            const adminData = req.body;
            const admin = await Admin.create(adminData);
            res.status(200).json(admin);
        }catch (e) {
            console.error(e);
            res.status(500).json({error : 'Something went wrong.!'});
        }
    },
    checkAdmin: async function (req, res, next) {
        try {
            const username = req.params.username;
            const admin = await Admin.find({username: username});
            res.status(200).json(admin);
        } catch (e) {
            console.error('Something Went Wrong.!');
        }
    }
}

module.exports = AdminController;