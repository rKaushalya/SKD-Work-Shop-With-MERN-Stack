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
    }
}

module.exports = AdminController;