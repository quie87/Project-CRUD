const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../models/Item')

// GET api/items
// Get All Items
// Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

// POST api/items
// Create an item
// Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })

  newItem.save().then(item => res.json(item))
})

// POST api/items
// delete an item
// Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ succes: true })))
    .catch(() => res.status(404).json({ success: false }))
})

module.exports = router
