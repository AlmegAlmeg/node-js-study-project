const express = require('express')
const router = express.Router()
const { findUserById } = require('../../model/users')

router.get('/', async (req,res)=>{
    try{
        const userData = await findUserById(req.jwtData.id)
        res.json({ 
            status: 200, 
            msg: 'User found!', 
            userName: userData.userName,
            email: userData.email,
            biz: userData.biz,
        })
    }catch(err){
        res.status(401).json({ status: 401, msg: 'User not found'})
    }
})

module.exports = router