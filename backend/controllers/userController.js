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
  console.log("here");
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
            const token = jwt.sign({ name: user._id }, "verysecretValue", {
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

module.exports = {
  registerUser,
  loginUser,
  signoutUser,
  findUserById,
};
