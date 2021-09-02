const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  givenName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    set: (email) => email.toLowerCase(),
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
