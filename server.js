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
//     defaultSrc: ["'self'"],
//     fontSrc: ["'self'"],
//     scriptSrc: ["'self'"]
//   }
// }))

// Use routes
app.use('/api/projects', require('./routes/api/projects'))
app.use('/api/todos', require('./routes/api/todos'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

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
