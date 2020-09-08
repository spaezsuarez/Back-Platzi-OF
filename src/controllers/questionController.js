const Question = require('../models/question');

class QuestionController{
    async getAll(){
        const data = await Question.find().populate('answers');
        return data;
    }

    async get(id){
        const data = await Question.findOne({_id:id}).populate('answers').populate('user').exec();
        return data;
        
    }

    create(data){
        const question = new Question(data);
        question.save();
    }

    async updateAnswers(questionId,answerId){
        const question = await this.get(questionId);
        question.answers.push(answerId);
        await question.save();
    }
}
module.exports = QuestionController;