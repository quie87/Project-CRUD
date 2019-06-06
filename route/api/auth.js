const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')
require('dotenv').config()
// User Model
const User = require('../../models/User')

// @route POST api/auth
// @description Auth user
// Public
router.post('/', (req, res) => {
  const { email, password } = req.body

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Pls enter all fields' })
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'Wrong email or password' })

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'Wrong email or password' })

          jwt.sign(
            { id: user.id },
            process.env.jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err
              res.status(200).json({
                token,
                user: {
                  _id: user._id,
                  name: user.name,
                  email: user.email,
                  register_date: user.register_date
                }
              })
            }
          )
        })
    })
})

// @Rout Get api/auth/user
// @desciption Get user data but not password
// Private

router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})

module.exports = router
