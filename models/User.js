const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  register_date: {
    type: Date,
    default: Date.now
  }

})

// create a mongoose model to export
const user = mongoose.model('user', UserSchema)

module.exports = user
