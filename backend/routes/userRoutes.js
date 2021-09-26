import * as express from 'express'

// const UserController = require("../controllers/UserController");
import * as UserController from '../controllers/userController.js'
// const AuthController = require("../controllers/authController");
import * as AuthController from '../controllers/authController.js'
// const Validator = require("../validators/formValidator");
import * as Validator from '../validators/formValidator.js'

const userRouter = express.Router()

userRouter.post(
    '/register',
    Validator.signupValidator,
    UserController.registerUser
)
userRouter.post('/login', Validator.signinValidator, UserController.loginUser)
userRouter.get('/signout', UserController.signoutUser)

userRouter.get('/test', AuthController.requireSignin, (req, res) => {
    res.send(req.auth)
})

userRouter.post('/resetPassword', UserController.resetPassword)
userRouter.post('/newPassword', UserController.newPassword)

// module.exports = userRouter;
export { userRouter }
