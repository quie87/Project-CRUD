const express = require('express')
const mongoose = require('./config/mongoose.js')
const helmet = require('helmet')
const path = require('path')
require('dotenv').config()

const projects = require('./routes/api/projects')
const todos = require('./routes/api/todos')
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')

const port = process.env.PORT || 5000

const app = express()

// Connect to MongoDB
mongoose.run().catch(error => {
  console.error(error)
  process.exit(1)
})

// Bodyparser middleware
app.use(express.json())

// Put the helmet on
app.use(helmet())

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    fontSrc: ["'self'"],
    scriptSrc: ["'self'"]
  }
}))

// Use routes
app.use('/api/projects', projects)
app.use('/api/todos', todos)
app.use('/api/users', users)
app.use('/api/auth', auth)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Starts server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

module.exports = app
