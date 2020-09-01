const express = require('express');
const router = express.Router();
const { succes, error } = require('../resources/response');
const QuestionController = require('../controllers/questionController');

let controller = new QuestionController();

router.post('/create',async (req,res) => {
    await controller.create(req.body);
    succes(res,201,{message:'Creacion exitosa'});
})

module.exports = router;