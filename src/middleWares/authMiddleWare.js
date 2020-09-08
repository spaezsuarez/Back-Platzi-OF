const secret = require('../private/secret');
const { findUserByEmail,createToken,findByToken } = require('../resources/authFunctions');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const response = require('../resources/response');
const { encriptSteps } = require('../private/credentialsDB');
const AuthController = require('../controllers/authController');

let controller = new AuthController();

function required(req,res,next){

    const inputToken = req.query.token;

    jwt.verify(inputToken,secret,async (error,token) => {
        if(error){
            return response.error(res,401,{
                message:`Unauthorized`,
                error:`Error: ${error}`
            });
        }
        req.user = await findByToken(inputToken);
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

    const steps = bcrypt.genSaltSync(encriptSteps);
    const newPassword = bcrypt.hashSync(req.body.password,steps);
    req.body.password = newPassword;

    await controller.createUser(req.body);
    next();
}

async function getName(req,res,next){
    let data = await controller.getById(req.query.id);
    let name = `${data.firstName} ${data.lastName}`;
    req.name = name;
    next();
}

module.exports = {
    required,
    register,
    login,
    getName
}