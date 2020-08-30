const { currentUser, secret } = require('../resources/dumyData');
const jwt = require('jsonwebtoken');
const response = require('../resources/response');

function userMiddleWare(req,res,next){
    req.user = currentUser;
    next();
}

function required(req,res,next){
    jwt.verify(req.query.token,secret,(error,token) => {
        if(error){
            return response.error(res,401,{
                message:`Unauthorized`,
                error:`Error: ${error}`
            })
        }
        req.user = token.user;
        next();
    })
}


module.exports = {
    userMiddleWare,
    required
}