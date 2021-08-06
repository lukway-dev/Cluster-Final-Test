const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }]
}, {
  toJSON: {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.password
    }
  }
})

const User = model('User', userSchema)

module.exports = User