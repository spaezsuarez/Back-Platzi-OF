const express = require('express');
const { questions } = require('../resources/example');
const { questionMiddleWare,userMiddleWare } = require('../common/middleWares')

const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({questions});
});

router.get('/detail/:id',questionMiddleWare,(req,res) => {
    res.status(200).json({data:req.question})
});

router.post('/create',userMiddleWare,(req,res) => {
    const pregunta = req.body;
    pregunta.id = +new Date();
    pregunta.user = req.user;
    pregunta.createdAt = new Date();
    pregunta.respuestas = [];
    questions.unshift(pregunta);

    res.status(201).json(pregunta);
})

router.post('/:id/respuestas',questionMiddleWare,userMiddleWare,(req,res) => {
    const answer = req.body;
    const question = req.question;
    answer.createdAt = new Date();
    answer.user = req.user;
    question.respuestas.unshift(answer);
    questions.forEach((pregunta,indice) => {
        if(question.createdAt === pregunta.createdAt){
            questions.splice(indice,1,question);
        }
    });
    res.status(201).json(question);
});



module.exports = router;