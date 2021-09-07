const express = require('express')
const userRouter  = express.Router();

const UserController = require('../controllers/userController');

userRouter.post('/registerUser', UserController.registerUser);
userRouter.post('/loginUser', UserController.loginUser);

module.exports = userRouter;