const express = require("express");
const userRouter = express.Router();

const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/authController");

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);

module.exports = userRouter;
