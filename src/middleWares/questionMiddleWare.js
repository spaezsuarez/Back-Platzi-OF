const QuestionController = require('../controllers/questionController');
const AnswerController = require('../controllers/answerController');

let questionController = new QuestionController();
let answerController = new AnswerController();

async function questionMiddleWare(req, res, next) {
    let id = req.params.id;
    req.question = await questionController.get(id);
    next();
}

async function questionsMiddleWare(req, res, next) {
    req.questions = await questionController.getAll();
    next();
}

async function answerCreationMiddleWare(req,res,next){
    const userId = req.user._id;
    const questionId = req.question._id;

    req.body.question = questionId;
    req.body.user = userId;
    await answerController.createAnswer(req.body);
    next();

}

async function qustionCreationMiddleWare(req,res,next){
    const { _id } = req.body.user;
    req.body.user = _id;
    await questionController.create(req.body);
    next();
}

module.exports = {
    questionMiddleWare,
    questionsMiddleWare,
    qustionCreationMiddleWare,
    answerCreationMiddleWare
}