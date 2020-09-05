const Answer = require('../models/answer');

module.exports = class AnswerController{

     createAnswer(data){
        const answer = new Answer(data);
        return answer.save();
     }

     async get(answerId){
        const data = await Answer.find({_id:answerId});
        return data;
     }
}