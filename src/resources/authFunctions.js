const { users } = require('./dumyData');
const secret = require('../private/secret');
const jwt = require('jsonwebtoken');

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
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