const Answer = require('../models/answer');

module.exports = class AnswerController{

     createAnswer(data){
         const answer = new Answer(data);
         answer.save();
     }
}