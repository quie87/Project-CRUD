const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

// User Model
const User = require('../../models/User')

// @route POST api/users
// @description Register new user
// Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Pls enter all fields' })
  }

  if (password.length < 8) {
    return res.status(400).json({ msg: 'Pls enter a password that is longer then 8 characters' })
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'Bad request' })

      const newUser = new User({
        name,
        email,
        password
      })

      // Create salt & hash
      bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err

        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err

          newUser.password = hash
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err
                  res.status(200).json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  })
                }
              )
            })
        })
      })
    })
})

module.exports = router
