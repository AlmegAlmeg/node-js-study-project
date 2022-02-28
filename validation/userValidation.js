const Joi = require('joi')

const loginSkeleton = {
    email: Joi.string().email({ 
        minDomainSegments: 2, 
        tlds: { allow: ['com', 'net'] }})
        .required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
}

const registerSkeleton = {
    userName: Joi.string().alphanum().min(2).max(20).required(),
    ...loginSkeleton,
    biz: Joi.boolean()
}

const loginSchema = Joi.object(loginSkeleton)
const registerSchema = Joi.object(registerSkeleton)

module.exports = {
    loginSchema,
    registerSchema
}