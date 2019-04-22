const router = require('express').Router()
const auth = require('../../middleware/auth')

// Project Model
const Project = require('../../models/Project')

// Get All projects
// Private
router.get('/', (req, res) => {
  Project.find()
    .sort({ date: -1 })
    .then(projects => res.json(projects))
})

// POST
// Create a Project
// @Private
router.post('/', auth, (req, res) => {
  const newProject = new Project({
    name: req.body.name,
    userId: req.body.userId
  })

  newProject.save().then(project => res.json(project))
})

// POST
// delete a Project
// @Private
router.delete('/:id', auth, (req, res) => {
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ succes: true })))
    .catch(() => res.status(404).json({ success: false }))
})

module.exports = router
