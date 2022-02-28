const express = require('express')
const router = express.Router()
const { findCardById } = require('../../model/cards')
const { findUserById } = require('../../model/users')

router.get('/:id', async (req,res)=>{
    try{
        const { id } = req.params
        const result = await findCardById(id)
        const { bizName, description, address, phoneNumber, bizImg } = result
        const creator = await findUserById(result.createdBy)
        res.json({ 
            status: 200, 
            msg: "Card found!",
            bizName: bizName,
            description: description,
            address: address,
            phoneNumber: phoneNumber,
            bizImg: bizImg,
            createdBy: creator.userName
        })
    }catch(err){
        res.status(400).json({ status: 400, msg: "Error, No card found with this id! "})
    }
})

module.exports = router