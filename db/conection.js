const mongoose = require("mongoose")
const { DB_PATH } = process.env;

const mongoConnect = async () => {
    await mongoose.connect(DB_PATH)
}
module.exports = mongoConnect;