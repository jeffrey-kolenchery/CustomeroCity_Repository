const express = require("express");
const customerRouter = express.Router();

const CustomerController = require("../controllers/customerController");
const { findUserById } = require("../controllers/userController");
const { isAuth, requireSignin } = require("../controllers/authController");
const { findCalendarById } = require("../controllers/calendarController");

// Calls callback function every time "userId" is in the parameter.
// E.g. if /secret/6128965fd267fe25743bfec2 is called,
// Because: /secret/:userId this route is getting called,
// the callback function findUserById is being called.
customerRouter.param("userId", findUserById);
customerRouter.param("userId", findCalendarById);

customerRouter.get("/test/:userId", (req, res) => {
  console.log(req.profile);
  console.log(req.auth);
  res.send(req.auth);
  console.log(req.calendar);
});

// Sending a request to create a customer for :userId will require the request
// to include an authorization token where the decrypted userId matches the
// userId in the params.
// When registering a customer for :userId, we make sure that the person sending
// the request is logged in by that same userId.
customerRouter.post(
  "/registerCustomer/:userId",
  requireSignin,
  isAuth,
  CustomerController.registerCustomer
);
customerRouter.post(
  "/deleteCustomer/:userId",
  requireSignin,
  isAuth,
  CustomerController.deleteCustomer
);
customerRouter.get(
  "/searchCustomers/:userId",
  requireSignin,
  isAuth,
  CustomerController.searchCustomers
);

module.exports = customerRouter;
