const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../validators/dbErrorHandler");

const findUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    } else {
      req.profile = user;
      next();
    }
  });
};
//NodeMailer Modules + func
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

const registerUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.status(403).send("Forbidden");
    }
    let user = new User({
      givenName: req.body.givenName,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.status(200).send("User Added Successfully!");
      })
      .catch((error) => {
        res.status(400).send({
          error: errorHandler(error),
        });
      });
  });
};
const loginUser = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({ $or: [{ email: username }, { phone: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            console.log(user);
            const token = jwt.sign({ _id: user._id }, "verysecretValue", {
              expiresIn: "1hr",
            });

            // Persist the token as 't' in cookie with expiry date
            res.cookie("t", token, { expire: new Date() + 9999 });
            res.json({
              message: "Login Successful!",
              token,
            });
          } else {
            res.json({
              message: "Password does not match!",
            });
          }
        });
      } else {
        res.json({
          message: "No user found",
        });
      }
    }
  );
};

const signoutUser = (req, res) => {
  // Clear token cookie.
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};

const resetPassword = (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "User dont exists with that email" });
      }
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((result) => {
        transporter.sendMail({
          to: user.email,
          from: "sanskarb@student.unimelb.edu.au",
          subject: "password reset",
          html: `
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="http://localhost/reset/${token}">link</a> to reset password</h5>
                    `,
        });
        res.json({ message: "check your email" });
      });
    });
  });
};

const newPassword = (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ error: "Try again session expired" });
      }
      bcrypt.hash(newPassword, 12).then((hashedpassword) => {
        user.password = hashedpassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((saveduser) => {
          res.json({ message: "password updated success" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  registerUser,
  loginUser,
  signoutUser,
  resetPassword,
  newPassword,
  findUserById,
};
