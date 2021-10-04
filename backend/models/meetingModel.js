const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const meetingSchema = new Schema({
  loc: {
    type: Array,
    required: true,
  },
  calendar: {
    type: ObjectId,
    ref: "Calendar",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "Customer",
    required: true,
  },
  customer: {
    type: ObjectId,
    ref: "Customer",
    required: true,
  },
  expireToken: Date,
});

const Meeting = mongoose.model("meetings", meetingSchema);
module.exports = Meeting;
