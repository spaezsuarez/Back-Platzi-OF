const User = require('../models/user');

class AuthController{

    createUser(data){
        const user = new User(data);
        user.save();
    }

    async getByEmail(email){
        const data = await User.findOne({email});
        return data;
    }   
    
}

module.exports = AuthController;
