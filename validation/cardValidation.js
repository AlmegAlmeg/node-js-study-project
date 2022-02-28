const Joi = require('joi')

const skeleton = {
    bizName: Joi.string().required(),
    description: Joi.string().required(),
    address: Joi.string().required(),
    phoneNumber: Joi.number().integer().required(),
    bizImg: Joi.string()
}

const updateSkeleton = {
    bizName: Joi.string(),
    description: Joi.string(),
    address: Joi.string(),
    phoneNumber: Joi.number().integer(),
    bizImg: Joi.string()
}

const cardsSchema = Joi.object(skeleton)
const updateSchema = Joi.object(updateSkeleton)

module.exports = {
    cardsSchema,
    updateSchema
}