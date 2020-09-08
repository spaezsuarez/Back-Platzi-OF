//Imports 
const express = require('express');
const response = require('../resources/response');
const { comparePassWords } = require('../resources/authFunctions');
//Instancias
const router = express.Router();
const { register,login,getName } = require('../middleWares/authMiddleWare');

router.post('/login',login,(req,res) => {
    
    if(req.user === null || req.user === undefined){
        return response.error(res,401,{ message:'Email and Password Dont match'});
    }

    if(!comparePassWords(req.body.password,req.user.password)){
        return response.error(res,401,{ message:'Password is incorrect'});
    }

    response.succes(res,200,{
        message:'Login success',
        userId:req.user.id,
        firstName:req.user.firstName,
        lastName:req.user.lastName,
        email:req.user.email,
        token:req.user.token,
        password:req.user.password
    });
});

router.post('/register',register,(req,res) => {

    try{
        response.succes(res,201,{
            message:`Usuario creado exitosamente`,
            token:req.token,
            firstName:req.firstName,
            lastName: req.lastName,
            email: req.email,
            password:req.password
        });
    }catch(err){
        response.error(res,501,{ 
            message:'Internal error',
            error:err
        });
    }
});

router.get('/name',getName,(req,res) => {
    if(req.name === undefined || req.name === null){
        response.error(res,404,{
            message:'Usuario no identificado',
            name:'anonimo'
        });
    }else{
        response.succes(res,200,{name:req.name});
    }
});


module.exports = router;