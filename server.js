const express = require('express')
const mongoose = require('./config/mongoose.js')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const items = require('./routes/api/items')

const port = process.env.PORT || 5000

// Connect to the database.
mongoose.run().catch(error => {
  console.error(error)
  process.exit(1)
})

const app = express()

// Bodyparser middleware
app.use(bodyParser.json())

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
app.use('/api/items', items)

// Starts server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  console.log('Press Ctrl-C to terminate...\n')
})
