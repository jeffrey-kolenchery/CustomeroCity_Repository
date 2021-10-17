import mongoose from 'mongoose'
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema

const meetingSchema = new Schema({
    Subject: {
        type: String,
    },
    loc: {
        type: String,
        required: true,
    },
    StartTime: {
        type: Date,
        required: true,
    },
    EndTime: {
        type: Date,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    customer: {
        type: ObjectId,
        ref: 'Customer',
        required: true,
    },
    description: {
        type: String,
    },
    Id: {
        type: Number,
    },
    expireToken: Date,
})

const Meeting = mongoose.model('meetings', meetingSchema)
export { Meeting }
