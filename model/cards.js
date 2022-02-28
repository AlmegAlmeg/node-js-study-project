const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    bizName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 200,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    bizImg: String,
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,

    },
})

const Card = mongoose.model('cards', cardSchema)


const createCard = (bizName, description, address, phoneNumber, bizImg, createdBy) =>{
    const newCard = new Card(bizName, description, address, phoneNumber, bizImg, createdBy)
    return newCard.save()
}

const findCardById = cardId =>{
    return Card.findById(cardId)
}

const deleteCardById = cardId =>{
    return Card.deleteOne({ _id :cardId })
}


const findAllCardsByUser = userId =>{
    return Card.find({ createdBy: userId })
}

module.exports = {
    createCard,
    findCardById,
    deleteCardById,
    findAllCardsByUser,
    Card
}