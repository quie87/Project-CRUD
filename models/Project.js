const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

// create a mongoose model to export
const project = mongoose.model('project', ProjectSchema)

module.exports = project
