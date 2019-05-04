const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// User Model
const User = require('../../models/User')

// @route POST api/users
// @desc Register new user
// Public atm
router.post('/', (req, res) => {
  const { name, email, password } = req.body

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Pls enter all fields' })
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
                process.env.jwtSecret,
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
