/**
 * Mongoose configuration.
 *
 * @author Kristoffer Åberg
 * @version 1.0.0
 */

'use strict'

const mongoose = require('mongoose')

const temporaryKeyLocation = 'mongodb+srv://user:sKrief353KeQ@ex2db-7mupt.mongodb.net/test?retryWrites=true'

/**
 * Establishes a connection to a database.
 *
 * @returns {Promise}
*/
module.exports.run = async () => {
  mongoose.Promise = global.Promise

  mongoose.connection.on('connected', () => console.log('Mongoose connection is open. Dont forget to change location of key'))
  mongoose.connection.on('error', err => console.error(`Mongoose connection error has occured: ${err}`))
  mongoose.connection.on('disconnected', () => console.log('Mongoose connection is disconnected.'))

  // If the Node process ends, close the Mongoose connection.
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose connection is disconnected due to application termination.')
      process.exit(0)
    })
  })

  // Connect to the server.
  return mongoose.connect(temporaryKeyLocation)
}
