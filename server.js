const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const port = process.env.PORT || 5000

const app = express()

// Bodyparser middleware
app.use(bodyParser.json())

// Put the helmet on
app.use(helmet())

app.use(helmet.contentSecurityPolicy({
  directives: {
    // defaultSrc: ["'self'"],
    // fontSrc: ["'self'"],
    // styleSrc: ["'self'"],
    scriptSrc: ["'self'"]
  }
}))

// Starts server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  console.log('Press Ctrl-C to terminate...\n')
})