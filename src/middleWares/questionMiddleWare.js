const { questions } = require('../resources/dumyData');
const QuestionController = require('../controllers/questionController');

let controller = new QuestionController();

function  questionMiddleWare(req,res,next){
    let id = req.params.id;
    //req.question = questions.find(question => question.id === +id);
    req.question = controller.get(id);
    next();
}

async function questionsMiddleWare(req,res,next){
    try {
        const questions = await controller.getAll();
        req.questions = controller.getAll();
    } catch (error) {
        throw new Error(error);
    }
    
    next();
}

module.exports = {
    questionMiddleWare,
    questionsMiddleWare
}