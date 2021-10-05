const express = require("express");
const userRouter = express.Router();

const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/authController");
const Validator = require("../validators/formValidator");

userRouter.post("/register", Validator.signupValidator, UserController.registerUser);
userRouter.post("/login", Validator.signinValidator, UserController.loginUser);
userRouter.get("/signout",UserController.signoutUser);

userRouter.get("/test", AuthController.requireSignin, (req, res) => {
  res.send(req.auth);
});

userRouter.post('/resetPassword', UserController.resetPassword);
userRouter.post('/newPassword', UserController.newPassword);

module.exports = userRouter;