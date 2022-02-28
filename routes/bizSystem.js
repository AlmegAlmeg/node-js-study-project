const express = require('express')
const router = express.Router()

//* routes
const newCardRouter = require('./bizSystem/newCard')
const findCardRouter = require('./bizSystem/findCard')
const updateCardRouter = require('./bizSystem/updateCard')
const deleteCardRouter = require('./bizSystem/deleteCard')
const listRouter = require('./bizSystem/list')

//* routes usage
router.use('/new', newCardRouter)
router.use('/find', findCardRouter)
router.use('/update', updateCardRouter)
router.use('/delete', deleteCardRouter)
router.use('/list', listRouter)

module.exports = router