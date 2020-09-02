const QuestionController = require('../controllers/questionController');

let controller = new QuestionController();

async function questionMiddleWare(req, res, next) {
    let id = req.params.id;
    req.question = await controller.get(id);
    next();
}

async function questionsMiddleWare(req, res, next) {
    req.questions = await controller.getAll();
    next();
}

async function qustionCreationMidlleWare(req,res,next){
    const { _id } = req.body.user;
    req.body.user = _id;
    await controller.create(req.body);
    next();
}

module.exports = {
    questionMiddleWare,
    questionsMiddleWare,
    qustionCreationMidlleWare
}