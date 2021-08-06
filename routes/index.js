const express = require('express')
const router = express.Router()

const EventControllers = require('../controllers/EventControllers')
const UserControllers = require('../controllers/UserControllers')

const Router = () => {

  // Events
  router.get('/events', EventControllers.getEvents)
  router.get('/highlights', EventControllers.getHighlightEvents)
  router.post('/events', EventControllers.createEvents)

  // Login
  router.post('/login', UserControllers.login)

  // Register
  router.post('/register', UserControllers.register)
  return router
}

module.exports = Router