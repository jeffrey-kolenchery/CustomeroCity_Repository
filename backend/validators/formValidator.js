/* eslint-disable no-useless-escape */
// Express Validator Middleware. We are able to use thes functions such as req.check, because we have
// app.use(express-validator) used as our middleware in app.js.
const signupValidator = (req, res, next) => {
    req.check('givenName', 'Name is required').notEmpty()
    req
        .check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({ min: 4, max: 32 })
    req.check('password', 'Password is required').notEmpty()
    req
        .check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number')
    req
        .check('phone')
        .isLength({ min: 10 })
        .withMessage('Phone must contain 10 numbers')

    const errors = req.validationErrors()

    if (errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({ error: firstError })
    }
    next()
}

const signinValidator = (req, res, next) => {
    req
        .check('username', 'Email is required')
        .notEmpty()
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({ min: 4, max: 32 })
    req.check('password', 'Password is required').notEmpty()
    req
        .check('password')
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number')

    const errors = req.validationErrors()

    if (errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({ error: firstError })
    }
    next()
}

export { signupValidator, signinValidator }
