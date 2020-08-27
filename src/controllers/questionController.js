const express = require('express');
const questions = require('../resources/example');
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({questions});
});

router.get('/detail/:id',(req,res) => {
    let id = req.params.id;
    const q = questions.find(question => question.id === +id);
    res.status(200).json({data:q})
});

router.post('/create',(req,res) => {
    const pregunta = req.body;
    pregunta.id = +new Date();
    pregunta.user = {
        email:'spaezsuarez@gmail.com',
        password:'123456',
        firstName:'Sergio David',
        lastName:'Paez Suarez'
    }
    pregunta.createdAt = new Date();
    pregunta.ansewers = [];
    questions.unshift(pregunta);

    res.status(200).json(pregunta);
})



module.exports = router;