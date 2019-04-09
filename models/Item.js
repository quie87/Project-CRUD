const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

// create a mongoose model to export
const item = mongoose.model('item', ItemSchema)

module.exports = item
