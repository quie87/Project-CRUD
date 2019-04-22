const router = require('express').Router()
const auth = require('../../middleware/auth')

// Todo Model
const Todo = require('../../models/Todo')

// Get All Todos
// Public atm
router.get('/', (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then(todos => res.json(todos))
})

// POST
// Create an Todo
// @Private
router.post('/', auth, (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  })

  newTodo.save().then(todo => res.json(todo))
})

// POST
// delete an Todo
// @Private
router.delete('/:id', auth, (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ succes: true })))
    .catch(() => res.status(404).json({ success: false }))
})

module.exports = router
