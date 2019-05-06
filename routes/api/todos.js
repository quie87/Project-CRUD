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
router.post('/', auth, (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    parentName: req.body.parentName,
    userId: req.body.userId
  })

  newTodo.save().then(todo => res.status(200).json(todo))
})

// POST
// Update todo completed
// @ Private
// PUT?
router.put('/:todo', (req, res) => {
  const id = req.params.todo.id
  const todo = req.params.todo.completed

  console.log('Funkar ' + id)
  console.log('Funkar ' + todo)

  Todo.updateOne({ _id: req.params.id }, { completed: todo })
    .then(todo => res.json(todo))
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
