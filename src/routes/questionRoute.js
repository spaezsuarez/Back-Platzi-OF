const express = require('express');
const { required } = require('../middleWares/authMiddleWare');
const { questionMiddleWare, questionsMiddleWare, qustionCreationMiddleWare, answerCreationMiddleWare} = require('../middleWares/questionMiddleWare');
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

router.post('/create',required,qustionCreationMiddleWare,(req, res) => {

    //await controller.create(req.body);
    response.succes(res, 201, `Pregunta creada`);

})

router.post('/:id/respuestas', required, questionMiddleWare,answerCreationMiddleWare, (req, res) => {
    try{
        response.succes(res,201,{
            message:`Respuesta agregada`,
            title:req.body.title,
            description:req.body.description,
            createdAt: req.body.createdAt      
        });
    }catch(err){
        response.error(res,501,{ 
            message:'Internal error',
            error:err
        });
    }


});



module.exports = router;