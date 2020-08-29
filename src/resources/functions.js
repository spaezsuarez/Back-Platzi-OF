const { users } = require('../resources/example');

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
}

const comparePassWords = (password) => {
    return users.find(user => user.password === password);
}

module.exports = {
    findUserByEmail,
    comparePassWords
}