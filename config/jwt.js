const jwt = require('jsonwebtoken')
const config = require('config')

const createToken = data =>{
    return new Promise((res,rej)=>{
        jwt.sign(data, config.get("jwtSecretKey"),{ expiresIn: '7d' }, (err, token)=>{
            if (err) rej(err)
            else res(token)
        })
    })
}

const verifyToken = token =>{
    return new Promise((res,rej)=>{
        jwt.verify(token, config.get('jwtSecretKey'), (err,decoded)=>{
            if (err) rej(err)
            else res(decoded)
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}