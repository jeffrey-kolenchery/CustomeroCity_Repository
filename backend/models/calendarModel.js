const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const calendarSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "Customer",
    required: true,
  },
  expireToken: Date,
});

const Calendar = mongoose.model("Calendars", calendarSchema);
module.exports = Calendar;
