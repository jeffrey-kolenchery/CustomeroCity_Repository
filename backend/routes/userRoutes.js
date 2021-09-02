const express = require("express");
const userRouter = express.Router();

const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/authController");
const Validator = require("../validators/formValidator");

userRouter.post(
  "/register",
  Validator.signupValidator,
  UserController.register
);
userRouter.post("/login", Validator.signinValidator, UserController.login);

userRouter.get("/test", AuthController.requireSignin, (req, res) => {
  res.send(req.auth);
});

module.exports = userRouter;
