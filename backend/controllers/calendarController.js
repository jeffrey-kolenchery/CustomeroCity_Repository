const Calendar = require("../models/calendarModel");

const findCalendarById = async (req, res, next) => {
  try {
    const calendar = await Calendar.findOne({ user: req.profile._id });
    req.calendar = calendar;
    console.log(calendar);
    console.log(req.profile);
  } catch (err) {
    console.error(err);
  }
  next();
};

const createCalendar = async (req, res) => {
  const cal = new Calendar({
    user: req.profile._id,
  });
  try {
    const calender = await cal.save();
    res.send(calender);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  findCalendarById,
  createCalendar,
};
