const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    givenName: {
        type:String,
        required: true
    },
    designation: {
        type:String
    },
    company: {
        type:String
    },
    email: {
        type:String,
        required: true,
        unique: true,
        set: (email) => email.toLowerCase()
    },
    phoneNo: {
        type:Number,
        required: true,
        unique: true
    },
    age: {
        type:Number
    },
    interests: {
        type:[String]
    }
});

const customer = mongoose.model('customers', customerSchema);
module.exports = customer;