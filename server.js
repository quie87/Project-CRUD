const express = require('express')
const mongoose = require('./config/mongoose.js')
const helmet = require('helmet')
require('dotenv').config()

const port = process.env.PORT || 5000

// Connect to the database.
mongoose.run().catch(error => {
  console.error(error)
  process.exit(1)
})

const app = express()

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
app.use('/api/projects', require('./routes/api/projects'))
app.use('/api/todos', require('./routes/api/todos'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

// Starts server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  console.log('Press Ctrl-C to terminate...\n')
})
