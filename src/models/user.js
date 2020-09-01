const { Schema,mongoose,validator } = require('../resources/db');

const userSchema = new Schema({
    email:{type:String, required:true,unique:true,index:true},
    password:{type:String,required:true},
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
});

userSchema.plugin(validator);

const User = mongoose.model('User',userSchema);
module.exports = User;