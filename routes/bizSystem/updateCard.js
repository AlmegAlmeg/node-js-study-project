const express = require('express')
const router = express.Router()
const { Card } = require('../../model/cards')
const { updateSchema } = require('../../validation/cardValidation')

router.put('/:id', async (req,res)=>{
    try {
        const cardId = req.params.id
        const value = await updateSchema.validateAsync(req.body, { abortEarly: false })
        let { bizName, description, address, phoneNumber, bizImg } = value
        const updatedCard = await Card.findByIdAndUpdate(cardId, {
            bizName: bizName,
            description: description,
            address: address,
            phoneNumber: phoneNumber,
            bizImg: bizImg,
        })
        res.json({ status: 200, msg: "Card updated!", result: updatedCard })
    } catch (err) {
        res.status(400).json({ status: 400, err:err })
    }
})

module.exports = router