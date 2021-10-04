const express = require("express");
const meetingRouter = express.Router();

const { findUserById } = require("../controllers/userController");
const { isAuth, requireSignin } = require("../controllers/authController");
const {
  findCalendarById,
  createCalendar,
} = require("../controllers/calendarController");

const { createMeeting } = require("../controllers/meetingController");

// Calls callback function every time "userId" is in the parameter.
// E.g. if /secret/6128965fd267fe25743bfec2 is called,
// Because: /secret/:userId this route is getting called,
// the callback function findUserById is being called.
meetingRouter.param("userId", findUserById);
meetingRouter.param("userId", findCalendarById);

// Sending a request to create a customer for :userId will require the request
// to include an authorization token where the decrypted userId matches the
// userId in the params.
// When registering a customer for :userId, we make sure that the person sending
// the request is logged in by that same userId.
meetingRouter.post(
  "/createMeeting/:userId/:customerId",
  requireSignin,
  isAuth,
  createMeeting
);

module.exports = meetingRouter;
