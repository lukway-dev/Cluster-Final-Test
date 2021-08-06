require('./config/mongo')

const express = require('express')
const routes = require('./routes')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(cookieParser())

app.use(cors())

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

app.use('/', routes())

app.listen(process.env.PORT || 3001)