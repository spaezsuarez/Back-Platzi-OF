const question = {
    id:1,
    title:'Esta es una nueva pregunta sobre C#',
    description:'Tengo una duda con una aplicacion hecha en C# ....',
    createdAt:new Date(),
    icon:'devicon-csharp-plain colored',
    respuestas:[]

};

const questions = new Array(3).fill(question);

module.exports = questions;