const { questions , currentUser } = require('../resources/example');

function questionMiddleWare(req,res,next){
    let id = req.params.id;
    req.question = questions.find(question => question.id === +id);
    next();
}

function userMiddleWare(req,res,next){
    req.user = currentUser;
    next();
}


module.exports = {
    questionMiddleWare,
    userMiddleWare
}