const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@lukway.pmh6b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => console.log('\n\n Base de datos conectada \n\n'))
  .catch(error => console.error(error))