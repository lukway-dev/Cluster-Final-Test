const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config
const User = require('../models/UserModel')
const Event = require('../models/EventModel')


exports.getEvents = async (req, res, next) => {
  const events = await Event.find({})
  try {
    res.json(events)
    return next()
  } catch (error) {
    console.error(error)
    return next()
  }
}

exports.getHighlightEvents = async (req, res, next) => {
  const highlights = await Event.find({highlight: true})
  try {
    res.json(highlights)
    return next()
  } catch (error) {
    console.error(error)
    return next()
  }
}

exports.createEvents = async (req, res, next) => {
  const {name, description, date, location, image, highlight} = req.body
  const token = req.cookies.token

  // Ckeck inputs
  if(!name || !description || !date || !location || !image || !highlight){
    res.send({error: 'Por favor, completa todos los campos'})
    return next()
  }

  // Check events
  if(!token){
    res.send({error: 'No existe el token, por favor inicia sesión'})
    return next()
  }

  const decodedToken = jwt.verify(token, process.env.SECRET)

  const user = await User.findOne({username: decodedToken.username})

  // Create event
  const event = new Event({
    name,
    date,
    description,
    location,
    image,
    highlight,
    author: user.username
  })

  try {
    const savedEvent = await event.save()

    user.events = user.events.concat(savedEvent._id)
    await user.save()

    res.json(event)
    return next()
  } catch (error) {
    console.error(error)
    return next()
  }

}