const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },

}, { versionKey: false })

const Contact = model('contact', contactSchema);

module.exports = Contact;