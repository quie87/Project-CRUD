const express = require('express')
// const mongoose = require('./config/mongoose.js')
const mongoose = require('mongoose')
const config = require('config')
// const helmet = require('helmet')
const path = require('path')
// require('dotenv').config()

const app = express()

// Connect to MongoDB
// mongoose.run().catch(error => {
//   console.error(error)
//   process.exit(1)
// })

// DB Config
const db = config.get('mongoURI')

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
// app.use(helmet())

// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'"],
//     fontSrc: ["'self'"],
//     scriptSrc: ["'self', 'unsafe-inline', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'"]
//   }
// }))

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
