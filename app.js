const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const config = require('config')

mongoose.connect(config.get("dbName"))
    .then(()=> console.log({ status: 200 , msg: 'Connected to db, ready to use!'}))
    .catch( err => console.status(400).log({ msg: 'Connection to database failed ' }, err))

//* routes
const userSystemRouter = require('./routes/userSystem')
const bizCardRouter = require('./routes/bizSystem')
const authMiddleware = require('./middleware/authMiddleware')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//* routes usage
app.use('/users', userSystemRouter)
app.use('/biz',authMiddleware, bizCardRouter)

module.exports = app
