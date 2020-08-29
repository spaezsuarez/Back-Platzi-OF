const { users } = require('../resources/example');

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
}

const comparePassWords = (possiblePassword,password) => {
        return password === possiblePassword;
}

module.exports = {
    findUserByEmail,
    comparePassWords
}