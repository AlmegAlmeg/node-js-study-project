const express = require('express')
const router = express.Router()
const { loginSchema } = require('../../validation/userValidation')
const { compareHash } = require('../../config/bcrypt')
const { findUserByEmail } = require('../../model/users')
const { createToken } = require('../../config/jwt')

router.post('/', async (req,res)=>{
    try{
        const value = await loginSchema.validateAsync(req.body, { abortEarly: false })
        let { email, password } = value
        const usersArr = await findUserByEmail(email)
        if(usersArr.length == 0) 
            throw 'Email does not exists'

        let [{ password: userPass, biz: userBiz, id: userId, userName }] = usersArr
        const compareRes = await compareHash(password, userPass)
        if(!compareRes) 
            throw 'Wrong password'
            
        const token = await createToken({id: userId, biz: userBiz})
        res.json({ 
            status: 200, 
            msg: `Logged in Seccesfully! Welcome back ${userName}`, 
            token: token
        })
    }catch(err){
        res.json({ status: 400, msg: 'Error ' + err })
    }
})

module.exports = router