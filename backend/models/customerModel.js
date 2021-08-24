// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const customerSchema = new Schema({
//     givenName: {
//         type:String,
//         required: true
//     },
//     designation: {
//         type:String,
//         required: true
//     },
//     email: {
//         type:String,
//         required: true,
//         unique: true,
//         set: (email) => email.toLowerCase()
//     },
//     phone: {
//         type:Number,
//         required: true,
//         unique: true
//     },
//     age: {
//         type:String
//     }
// });

// const customer = mongoose.model('customer', customerSchema);
// module.exports = customer;