const Calendar = require("../models/calendarModel");

const findCalendarById = async (req, res, next, id) => {
  const calendar = await Calendar.findOne({ user: id });
  console.log(calendar);
  next();
};

module.exports = {
  findCalendarById,
};
