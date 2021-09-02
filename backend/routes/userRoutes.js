const express = require("express");
const userRouter = express.Router();

const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/authController");
const Validator = require("../validators/formValidator");

userRouter.post("/register", Validator, UserController.register);
userRouter.post("/login", Validator, UserController.login);

module.exports = userRouter;
