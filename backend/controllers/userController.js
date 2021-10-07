/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// const User = require("../models/userModel");

import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import * as crpyto from 'crypto'
import * as nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'
import { User } from '../models/userModel.js'

// import { errorHandler } from '../validators/dbErrorHandler.js'

const findUserById = (req, res, next) => {
    User.findById(req.params.userId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found',
            })
        }
        req.profile = user
        next()
    })
}
// NodeMailer Modules + func

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key:
        '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',
        },
    })
)

const registerUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        await bcrypt.hash(req.body.password, salt, (err, hashedPass) => {
            if (err) {
                res.status(403).send('Forbidden')
            }
            const user = new User({
                givenName: req.body.givenName,
                email: req.body.email,
                phone: req.body.phone,
                password: hashedPass,
            })
            user
                .save()
                .then(async (user) => {
                    res.status(200).send('User Added Successfully!')
                })
                .catch((error) => {
                    res.status(400).send(
                        'not able to add user for some error pls check dbErrorHandlin.js'
                        //   {
                        //   error: errorHandler(error),
                        // }
                    )
                })
        })
    } catch (error) {
        console.log(error)
    }
}
const loginUser = (req, res) => {
    const { username } = req.body
    const { password } = req.body
    User.findOne({ $or: [{ email: username }, { phone: username }] }).then(
        (user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.json({
                            error: err,
                        })
                    }
                    if (result) {
                        const token = jwt.sign({ _id: user._id }, 'verysecretValue', {
                            expiresIn: '1hr',
                        })

                        // Persist the token as 't' in cookie with expiry date
                        res.cookie('t', token, { expire: new Date() + 9999 })
                        res.status(200).json({
                            message: 'Login Successful!',
                            token,
                        })
                    } else {
                        res.status(400).json({
                            message: 'Password does not match!',
                        })
                    }
                })
            } else {
                res.status(404).json({
                    message: 'No user found',
                })
            }
        }
    )
}

const signoutUser = (req, res) => {
    // Clear token cookie.
    res.clearCookie('t')
    res.status(200)
    res.json({ message: 'Signout success' })
}

// >>>>>>>>>>>>> remember to change email from sanskar to something else + change from local host to herokuapp
const resetPassword = (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString('hex')
        User.findOne({ email: req.body.email }).then((user) => {
            if (!user) {
                return res
                    .status(422)
                    .json({ error: 'User dont exists with that email' })
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then((result) => {
                transporter.sendMail({
                    to: user.email,
                    from: 'sanskarb@student.unimelb.edu.au',
                    subject: 'password reset',
                    html: `
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="http://localhost/reset/${token}">link</a> to reset password</h5>
                    `,
                })
                res.json({ message: 'check your email' })
            })
        })
    })
}

const newPassword = (req, res) => {
    const newPassword = req.body.password
    const sentToken = req.body.token
    User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
        .then((user) => {
            if (!user) {
                return res.status(422).json({ error: 'Try again session expired' })
            }
            bcrypt.hash(newPassword, 12).then((hashedpassword) => {
                user.password = hashedpassword
                user.resetToken = undefined
                user.expireToken = undefined
                user.save().then((saveduser) => {
                    res.json({ message: 'password updated success' })
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

// const editProfile = (req, res) => {

// }

export {
    registerUser, // tested
    loginUser, // tested
    signoutUser,
    resetPassword,
    newPassword,
    findUserById,
}
