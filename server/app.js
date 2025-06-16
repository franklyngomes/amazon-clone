const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const DatabaseCon = require('./app/config/DatabaseCon')
DatabaseCon()
const cookie = require('cookie-parser')
app.use(cookie())
//Auth Routes
const authRouter = require('./app/routes/UserRoutes')
app.use('/auth',authRouter)


const port = 5000
app.listen(port, () => {
  console.log('Server is running on http://localhost:5000/')
})