const { Schema,mongoose,validator} = require('../resources/db');
const { ObjectId } = mongoose.Types;

const questionSchema = new Schema({
    title:{type:String,required:true},
    description:{ type:String, required:true},
    createdAt: { type:Date, default:Date.now, required:true},
    icon:{type:String, required:true},
    user:{type:ObjectId, ref:'User',required:true},
    answers:[{type:ObjectId, ref:'Answer',required:true}]

});

const Question = mongoose.model('Question',questionSchema);
module.exports = Question;