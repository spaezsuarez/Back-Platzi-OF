const secret = require('../private/secret');
const jwt = require('jsonwebtoken');
const AuthController = require('../controllers/authController');
const bcrypt = require('bcrypt');

let controller = new AuthController();

const findUserByEmail = (email) => {
    return controller.getByEmail(email);
}

const findByToken = (token) => {
    return controller.getByToken(token);
}

const comparePassWords = (possiblePassword,password) => {
    return bcrypt.compareSync(possiblePassword,password);
}

const createToken = (user) => {
    return jwt.sign({ user },secret);
}

module.exports = {
    findUserByEmail,
    comparePassWords,
    createToken,
    findByToken
}