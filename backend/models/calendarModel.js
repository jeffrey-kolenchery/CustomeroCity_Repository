const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const calendarSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  expireToken: Date,
});

const Calendar = mongoose.model("calendars", calendarSchema);
module.exports = Calendar;
