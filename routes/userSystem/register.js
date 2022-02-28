const express = require('express')
const router = express.Router()
const { registerSchema } = require('../../validation/userValidation')
const { createHash } = require('../../config/bcrypt')
const { findUserByEmail, createUser } = require('../../model/users')

router.post('/', async (req,res)=>{
    try{
        const value = await registerSchema.validateAsync(req.body, { abortEarly: false })
        let { userName, email, password, biz } = value
        password = await createHash(password)
        const usersArr = await findUserByEmail(email)

        if(usersArr.length != 0) 
            throw 'This email is already exists, please login or use different email'
        
        const newUser = await createUser(userName, email, password, biz)
        res.json({ status: 200, 
            msg: 'User created!' ,
            userName: userName,
            email: email, 
            biz: newUser.biz,
            id: newUser.id,
        })
    }catch(err){
        res.status(400).json({ status: 400, msg: 'Error ' + err })
    }
})

module.exports = router