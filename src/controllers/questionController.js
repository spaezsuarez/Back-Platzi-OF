const Question = require('../models/question');

class QuestionController{
    async getAll(){
        const data = await Question.find();
        return data;
    }

    async get(id){
        const data = await Question.findOne({_id:id});
        return data;
        
    }

    create(data){
        const question = new Question(data);
        question.save();
    }
}
module.exports = QuestionController;