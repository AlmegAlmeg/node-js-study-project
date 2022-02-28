const express = require('express')
const router = express.Router()
const { findUserById } = require('../../model/users')
const { createCard } = require('../../model/cards')
const { cardsSchema } = require('../../validation/cardValidation')

router.post('/', async (req,res)=>{
    try{
        const value = await cardsSchema.validateAsync(req.body, { abortEarly: false})
        let { bizName, description, address, phoneNumber, bizImg } = value
        const findCreateor = await findUserById(req.jwtData.id)
        const newCard = await createCard({
            bizName: bizName,
            description: description,
            address: address,
            phoneNumber: phoneNumber,
            bizImg: bizImg,
            createdBy: findCreateor,
        })
        res.json({ 
            status: 200, 
            msg: 'Card created!',
            bizName: newCard.bizName,
            description: newCard.description,
            address: newCard.address,
            phoneNumber: newCard.phoneNumber,
            bizImg: newCard.bizImg,
            createdBy: findCreateor.userName,
        })
    }catch(err){
        res.status(400).json({ status: 400, msg: "Error! " + err })
    }
})

module.exports = router