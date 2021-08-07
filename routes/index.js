const express = require('express')
const router = express.Router()

const EventControllers = require('../controllers/EventControllers')
const UserControllers = require('../controllers/UserControllers')

const Router = () => {

  // Events
  router.get('/api/events', EventControllers.getEvents)
  router.get('/api/highlights', EventControllers.getHighlightEvents)
  router.post('/api/events', EventControllers.createEvents)

  // Login
  router.post('/api/login', UserControllers.login)

  // Register
  router.post('/api/register', UserControllers.register)
  return router
}

module.exports = Router