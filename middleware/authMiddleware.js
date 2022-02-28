const jwt = require('../config/jwt')

module.exports = async (req,res,next)=>{
    try{
        req.jwtData = await jwt.verifyToken(req.headers.token)
        next()
    }catch(err){
        res.json({ status: 400, msg: 'You must be logged in to see this!'})
    }
}