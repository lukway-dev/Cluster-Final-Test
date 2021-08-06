const mongoose = require('mongoose')
const { Schema, model } = mongoose

const eventSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  highlight: {
    type: Boolean,
    require: true
  },
  author: {
    type: String,
    require: true
  }
}, {
  toJSON: {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  }
})

const Event = model('Event', eventSchema)

module.exports = Event