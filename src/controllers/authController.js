//Imports 
const express = require('express');
const Debug = require('debug');
const { findUserByEmail,comparePassWords } = require('../resources/functions');
const response = require('../resources/response');
const { secret } = require('../resources/example');
const jwt = require('jsonwebtoken');
//Instancias
const router = express.Router();
const debug = new Debug('OverFlow:auth');



router.post('/login',(req,res,next) => {
    const { email,password } = req.body;
    const user = findUserByEmail(email) || null;

    if(user === null){
        debug(`user with email ${email} not found`);
        response.error(res,401,{ message:'Email and Password Dont match'});
    }

    if(!comparePassWords(password)){
        debug(`password ${password} not match`);
        response.error(res,401,{ message:'Password is incorrect'});
    }

    //Primer parametro, el objeto del usuario para encriptar esa informacion
    //Segundo parametro clave que va a usar para encriptar la informacion
    //Tercer parametro opciones extra para la encriptacion mandadas en un json.
    const token = jwt.sign({ user },secret,{ expiresIn:86400});
    response.succes(res,200,{
        message:'Login success',
        userId:user.id,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email
    })
});


module.exports = router;