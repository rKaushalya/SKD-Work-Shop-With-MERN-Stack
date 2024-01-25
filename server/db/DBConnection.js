const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URL);
        console.info(`MongoDB connected to : ${conn.connection.host}`)
    }catch (e) {
        console.error("Mongo DB Connect Error.!",e);
    }
}

module.exports = db();