const express = require('express')
const router = express.Router()

//* routes
const registerRouter = require('./userSystem/register')
const loginRouter = require('./userSystem/login')
const userRouter = require('./userSystem/findUser')
const authMiddleware = require('../middleware/authMiddleware')

//* routes usage
router.use('/register', registerRouter)
router.use('/login', loginRouter)
router.use('/find', authMiddleware, userRouter)

module.exports = router