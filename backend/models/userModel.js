import mongoose from 'mongoose'

const { Schema } = mongoose

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
  resetToken: String,
  expireToken: Date,
})

const User = mongoose.model('users', userSchema)

export { User }
