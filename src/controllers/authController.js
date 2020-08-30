//Imports 
const express = require('express');
const response = require('../resources/response');
const { users } = require('../resources/dumyData');
const { findUserByEmail,comparePassWords,createToken} = require('../resources/authFunctions');
//Instancias
const router = express.Router();


router.get('/',(req,res) => {
    response.succes(res,200,users);
})

router.post('/login',(req,res) => {
    const { email,password } = req.body;
    const user = findUserByEmail(email);

    if(user === null || user === undefined){
        return response.error(res,401,{ message:'Email and Password Dont match'});
    }

    if(!comparePassWords(password,user.password)){
        return response.error(res,401,{ message:'Password is incorrect'});
    }

    //Primer parametro, el objeto del usuario para encriptar esa informacion
    //Segundo parametro clave que va a usar para encriptar la informacion
    //Tercer parametro opciones extra para la encriptacion mandadas en un json.
    const token = createToken(user);
    response.succes(res,200,{
        message:'Login success',
        userId:user.id,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        token:token
    })
});

router.post('/register',(req,res) => {
    const { firstName,lastName,email,password } = req.body;
    const user = {
        id:+new Date(),
        firstName:firstName,
        lastName: lastName,
        email: email,
        password:password
    }
    users.push(user);
    const token = createToken(user);

    response.succes(res,201,{
        message:`Usuario ${user.id} creado exitosamente`,
        token:token,
        userId:user.id,
        firstName:firstName,
        lastName: lastName,
        email: email,
        password:user.password
    });
});


module.exports = router;