const { Schema,mongoose} = require('../resources/db');
const { ObjectId } = mongoose.Types;

const answerSchema = new Schema({
    description:{ type:String, required:true},
    createdAt: { type:Date, default:Date.now, required:true},
    user:{type:ObjectId,ref:'User'},
    question:{type: ObjectId,ref:'Question'}
});

const Answer = mongoose.model('Answer',answerSchema);
module.exports = Answer;