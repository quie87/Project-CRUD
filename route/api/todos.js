const router = require('express').Router()
const auth = require('../../middleware/auth')

// Todo Model
const Todo = require('../../models/Todo')

// GET
// @description Get All Todos beloning to given user
// Private
router.get('/:id', auth, (req, res) => {
  const id = req.params.id
  const query = { 'userId': id }

  Todo.find(query)
    .then(todos => res.json(todos))
    .catch(() => res.status(404).json({ msg: 'Could not find todoItem' }))
})

// POST
// @description Create an Todo
// @Private
router.post('/create', auth, (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    parentName: req.body.parentName,
    userId: req.body.userId
  })

  newTodo.save().then(todo => res.status(200).json(todo))
    .catch(() => res.status(404).json({ msg: 'Could not save todoItem to Data base' }))
})

// POST
// @description Toggle todo completed or not
// @ Public
router.post('/update/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      todo.completed = !todo.completed
      return todo
    })
    .then(update => update.save())
    .then(todo => res.json(todo))
    .catch(() => res.status(400).json({ success: false }))
})

// Delete
// @description Delete all todos that belongs to given project
// @Private
// router.delete('/all/:name', auth, (req, res) => {
//   const name = req.params.name
//   const query = { 'parentName': name }

//   Todo.deleteMany(query)
//     .then(() => res.json({ success: true }))
//     .catch(() => res.status(400).json({ success: false }))
// })

// Delete
// @description Delete an Todo
// @Private
router.delete('/:id', auth, (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ msg: 'Could not delete todoItem from Data base' }))
})

module.exports = router
