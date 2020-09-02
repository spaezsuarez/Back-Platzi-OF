const express = require('express');
const { required } = require('../middleWares/authMiddleWare');
const { questionMiddleWare, questionsMiddleWare, qustionCreationMidlleWare} = require('../middleWares/questionMiddleWare');
const response = require('../resources/response');
const router = express.Router();


router.get('/', questionsMiddleWare,(req, res) => {

    if(req.questions === null || req.questions === undefined){
        response.error(res, 500, {
            message: 'Un error ha ocurrido',
            error: err
        });
    }else{
        response.succes(res, 200, { data: req.questions });
    }


});

router.get('/detail/:id',questionMiddleWare,(req, res) => {

    if(req.question === null || req.question === undefined){
        response.error(res, 500, {
            message: 'Un error ha ocurrido',
            error: err
        });
    }else{
        response.succes(res, 200, { data: req.question });
    }
});

router.post('/create',required,qustionCreationMidlleWare,(req, res) => {

    //await controller.create(req.body);
    response.succes(res, 201, `Pregunta creada`);

})

router.post('/:id/respuestas', required, questionMiddleWare, (req, res) => {
    const answer = req.body;
    const question = req.question;
    answer.createdAt = new Date();
    answer.user = req.user;
   
});



module.exports = router;