const router = require('express').Router()
const auth = require('../../middleware/auth')

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
// Private
router.post('/', auth, (req, res) => {
  const newItem = new Item({
    title: req.body.title
  })

  newItem.save().then(item => res.json(item))
})

// POST
// delete an item
// Private
router.delete('/:id', auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ succes: true })))
    .catch(() => res.status(404).json({ success: false }))
})

module.exports = router
