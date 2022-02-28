const express = require('express')
const router = express.Router()
const { Card } = require('../../model/cards')

router.delete('/:id', async (req,res)=>{
    try{
        const value = req.params.id
        await Card.findByIdAndDelete(value)
        if(result == null)
            throw 'Error, No card found with this id!'

        res.json({ status: 200, msg: 'Card deleted!'})
    }catch(err){
        res.status(400).json({ status: 400, err: err})
    }
})

module.exports = router