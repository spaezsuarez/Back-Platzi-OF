const secret = require('../private/secret');
const jwt = require('jsonwebtoken');
const AuthController = require('../controllers/authController');

let controller = new AuthController();

const findUserByEmail = (email) => {
    return controller.getByEmail(email);
}

const comparePassWords = (possiblePassword,password) => {
    return password === possiblePassword;
}

const createToken = (user) => {
    return jwt.sign({ user },secret,{ expiresIn:86400});
}

module.exports = {
    findUserByEmail,
    comparePassWords,
    createToken
}