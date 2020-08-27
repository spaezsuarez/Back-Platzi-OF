const express = require('express');
const router = express.Router();
const questions = require('../resources/example');

router.get('/',(req,res) => {
    res.status(200).json({questions});
});

router.get('/detail/:id',(req,res) => {
    let id = req.param.id;
    res.status(200).json({data:questions[0]})
});



module.exports = router;