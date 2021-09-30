const Meeting = require("../models/meetingModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createMeeting = (req, res, next) => {
  let meeting = new Meeting({
    givenName: req.body.givenName,
    designation: req.body.designation,
    company: req.body.comapany,
    email: req.body.email,
    age: req.body.age,
    phoneNo: req.body.phoneNo,
    interests: req.body.interests,
    user: req.profile._id,
  });
  customer
    .save()
    .then((customer) => {
      res.status(200).send("Customer Added Successfully!");
    })
    .catch((error) => {
      res.status(400).send("An error occured!");
    });
};

module.exports = {
  createMeeting,
};
