const { Schema,mongoose} = require('../resources/db');

const answerSchema = new Schema({
    description:{ type:String, required:true},
    createdAt: { type:Date, default:Date.now, required:true},
    user:{type:mongoose.Types.ObjectId,ref:'User'}
});

const Answer = mongoose.model('Answer',answerSchema);
module.exports = Answer;