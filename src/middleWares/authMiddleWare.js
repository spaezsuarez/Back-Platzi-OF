const secret = require('../private/secret');
const { findUserByEmail,createToken} = require('../resources/authFunctions');
const jwt = require('jsonwebtoken');
const response = require('../resources/response');
const AuthController = require('../controllers/authController');

let controller = new AuthController();

function required(req,res,next){
    jwt.verify(req.query.token,secret,(error,token) => {
        if(error){
            return response.error(res,401,{
                message:`Unauthorized`,
                error:`Error: ${error}`
            });
        }
        next();
    })
}

async function login(req,res,next){
    const { email } = req.body;
    const user = await findUserByEmail(email);
    req.user = user;
    next();
}

async function register(req,res,next){
    const token = createToken(req.body);
    req.body.token = token;
    await controller.createUser(req.body);
    next();
}

module.exports = {
    required,
    register,
    login
}