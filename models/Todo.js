const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

// create a mongoose model to export
const todo = mongoose.model('todo', TodoSchema)

module.exports = todo
