const express = require('express');
const { required } = require('../middleWares/authMiddleWare');
const { questionMiddleWare, questionsMiddleWare } = require('../middleWares/questionMiddleWare');
const { succes,error } = require('../resources/response');
const router = express.Router();
const QuestionController = require('../controllers/questionController');
let controller = new QuestionController();

router.get('/',async (req, res) => {

    try {
        const questions = await controller.getAll();
        succes(res, 200, { data: questions });
    } catch (err) {
        error(res, 500, {
            message: 'Un error ha ocurrido',
            error: err
        });
    }
});

router.get('/detail/:id',async (req, res) => {
   
    try {
        const questions = await controller.get(req.params.id);
        succes(res, 200, { data: questions });
    } catch (err) {
        error(res, 500, {
            message: 'Un error ha ocurrido',
            error: err
        });
    }
});

router.post('/create', async (req, res) => {
    
    await controller.create(req.body);
    succes(res,201,`Pregunta creada`);

})

router.post('/:id/respuestas', required, questionMiddleWare, (req, res) => {
    const answer = req.body;
    const question = req.question;
    answer.createdAt = new Date();
    answer.user = req.user;
    question.respuestas.unshift(answer);
    questions.forEach((pregunta, indice) => {
        if (question.createdAt === pregunta.createdAt) {
            questions.splice(indice, 1, question);
        }
    });
    response.succes(res, 201, questions);
});



module.exports = router;