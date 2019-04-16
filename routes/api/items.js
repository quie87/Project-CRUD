const router = require('express').Router()

// Item Model
const Item = require('../../models/Item')

// Get All Items
// Public atm
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

// POST
// Create an item
// Public atm
router.post('/', (req, res) => {
  const newItem = new Item({
    title: req.body.title
  })

  newItem.save().then(item => res.json(item))
})

// POST
// delete an item
// Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ succes: true })))
    .catch(() => res.status(404).json({ success: false }))
})

module.exports = router
