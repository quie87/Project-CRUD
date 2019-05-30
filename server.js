const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const helmet = require('helmet')
const path = require('path')

const app = express()

// DB Config
let db = config.get('mongoURI')

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

// Bodyparser middleware
app.use(express.json())

// Put the helmet on
app.use(helmet())

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", 'https://cdnjs.cloudflare.com', 'https://fonts.googleapis.com'],
    fontSrc: ["'self'", 'https://cdnjs.cloudflare.com', 'https://fonts.googleapis.com/', 'https://fonts.gstatic.com'],
    styleSrc: ["'self'", "'unsafe-inline'", 'https://cdnjs.cloudflare.com', 'https://fonts.googleapis.com/'],
    scriptSrc: ["'self'", "'unsafe-inline'", 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js']
  }
}))

// Redirect https
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') { res.redirect(`https://${req.header('host')}${req.url}`) } else { next() }
  })
}

// Use routes
app.use('/api/projects', require('./route/api/projects'))
app.use('/api/todos', require('./route/api/todos'))
app.use('/api/users', require('./route/api/users'))
app.use('/api/auth', require('./route/api/auth'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
