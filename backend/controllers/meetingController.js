const Meeting = require("../models/meetingModel");

const createMeeting = async (req, res, next) => {
  // Get time.
  console.log(req.body.year);
  const doo = new Date(`${req.body.year}-${req.body.month}-${req.body.day}`);
  const date = new Date(
    doo.getTime() + Math.abs(doo.getTimezoneOffset() * 60000)
  );
  // Create new meeting.
  let meeting = new Meeting({
    loc: req.body.location,
    calendar: req.calendar,
    date: date,
    user: req.profile._id,
    customer: req.params.customerId,
  });

  // Save to database.
  try {
    const meet = await meeting.save();
    res.send(meet);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createMeeting,
};
