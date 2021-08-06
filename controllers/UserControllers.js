const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv').config
const User = require('../models/UserModel')


exports.login = async (req, res, next) => {
  const {username, password} = req.body
  const user = await User.findOne({ username })

  try {
    // Check user
    if(!user){
      res.send({
        error: 'El usuario o la contraseña son incorrectos'
      })
      return next()
    }

    // Check password
    const correctPassword = await bcrypt.compare(password, user.password)
    if(!correctPassword) {
      res.send({
        error: 'El usuario o la contraseña son incorrectos'
      })
      return next()
    }

    // Create token
    const tokenPayload = {
      id: user._id,
      username: user.username
    }
    const token = jwt.sign(tokenPayload, process.env.SECRET)

    // Set cookie
    let date = Date.now()
    date = new Date(date)

    const hours = date.getHours()
    date.setHours(hours + 2)

    res.cookie('token', token, {
      httpOnly: true.valueOf,
      expires: date
    })
    return res.send({token})
  } catch (error) {
    console.error(error)
  }
}

exports.register = async (req, res, next) => {
  const {username, password} = req.body
  const userExist = await User.findOne({username})

  if(userExist){
    res.json({error: 'Este nombre de usuario no esta disponible'})
    return next()
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const user = new User({
    username,
    password: passwordHash,
    events: []
  })

  await user.save()
  res.json(user)
  return next()
}