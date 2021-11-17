// const mongoose = require("mongoose");
import mongoose from 'mongoose'

const { Schema } = mongoose
// const ObjectId = mongoose.Schema;

const customerSchema = new Schema({
    givenName: {
        type: String,
        required: true,
    },

    designation: {
        type: String,
    },
    company: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        set: (email) => email.toLowerCase(),
    },
    phoneNo: {
        type: Number,
        required: true,
        //unique: true,
    },
    age: {
        type: String,
    },
    interests: {
        type: [String],
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    visitCount: {
        type: Number,
        required: true
    }
})

const Customer = mongoose.model('customers', customerSchema)
export { Customer }
