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

    async getById(id){
        const data = await User.findOne({_id:id});
        return data;
    }
    
    async getByToken(token){
        const data = await User.findOne({token});
        return data;
    }
    
}

module.exports = AuthController;
