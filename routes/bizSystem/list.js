const express = require('express')
const router = express.Router()
const { findAllCardsByUser } = require('../../model/cards')

router.get('/', async (req,res)=>{
    try{
        const value = req.jwtData.id
        const result = await findAllCardsByUser(value)
        if(result.length == 0)
            throw "It seems like you don't have any bussiness cards yet"

        res.json({ status: 200, msg: 'All your current active bussiness cards', result: result})
    }catch(err){
        res.json({ status: 400, err: err})
    }
})

module.exports = router