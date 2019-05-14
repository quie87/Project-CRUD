const router = require('express').Router()
const auth = require('../../middleware/auth')

// Project Model
const Project = require('../../models/Project')

// Get All projects by user ID
// @Private
router.get('/:id', auth, (req, res) => {
  Project.find({ userId: req.params.id })
    .then(projects => res.status(200).json(projects))
    .catch(() => res.status(404).json({ success: false }))
})

// POST
// Create a Project
// @Private
router.post('/', auth, (req, res) => {
  const newProject = new Project({
    name: req.body.name,
    userId: req.body.userId
  })

  newProject.save().then(project => res.status(200).json(project))
    .catch(() => res.status(404).json({ msg: 'Could not add project to Data base' }))
})

// POST
// delete a Project by ID
// @Private
router.delete('/:id', auth, (req, res) => {
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ msg: 'Could not delete project from Data base' }))
})

module.exports = router
