const express = require('express')
const userRouter  = express.Router();

const UserController = require('../controllers/UserController');

userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);

userRouter.post('/resetPassword', UserController.resetPassword);
userRouter.post('/newPassword', UserController.newPassword);

module.exports = userRouter;