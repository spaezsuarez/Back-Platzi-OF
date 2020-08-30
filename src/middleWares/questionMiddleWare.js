const { questions } = require('../resources/dumyData');

function questionMiddleWare(req,res,next){
    let id = req.params.id;
    req.question = questions.find(question => question.id === +id);
    next();
}

function questionsMiddleWare(req,res,next){
    req.questions = questions;
    next();
}

module.exports = {
    questionMiddleWare,
    questionsMiddleWare
}