const router = require('express').Router()
const auth = require('../../middleware/auth')

// Todo Model
const Todo = require('../../models/Todo')

// Get All Todos
// Private
router.get('/:parentName', auth, (req, res) => {
  Todo.find({ parentName: req.params.parentName })
    .then(todos => res.json(todos))
})

// POST
// Create an Todo
// @Private
router.post('/create', auth, (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    parentName: req.body.parentName,
    userId: req.body.userId
  })

  newTodo.save().then(todo => res.status(200).json(todo))
})

// POST
// Toggle todo completed or not
// @ Public
router.post('/update/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      todo.completed = !todo.completed
      return todo
    })
    .then(update => update.save())
    // .then(todo => {
    //   Todo.updateOne({ _id: req.params._id }, { $set: { completed: todo.completed } })
    //   return todo
    // })
    .then(todo => res.json(todo))
    .catch(() => res.status(400).json({ success: false }))
})

// POST
// delete an Todo
// @Private
router.delete('/:id', auth, (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }))
})

module.exports = router
