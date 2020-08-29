const question = {
    id: 1,
    title: 'Esta es una nueva pregunta sobre C#',
    description: 'Tengo una duda con una aplicacion hecha en C# ....',
    createdAt: new Date(),
    icon: 'devicon-csharp-plain colored',
    respuestas: [],
    user: {
        firstName: 'Sergio David',
        lastName: 'Paez Suarez',
        email: 'spaezsuarez@gmail.com',
        password: '123456',
        id:1
    }

};

const currentUser = {
    email: 'spaezsuarez@gmail.com',
    password: '123456',
    firstName: 'Sergio David',
    lastName: 'Paez Suarez',
    id:1
}

const users = [{
    email: 'spaezsuarez@gmail.com',
    password: '123456',
    firstName: 'Sergio David',
    lastName: 'Paez Suarez',
    id:1
},{
    email: 'ejemplo@mail.com',
    password: '123456',
    firstName: 'Miguel Angel',
    lastName: 'Paez Suarez',
    id:2
}];

const secret = 'mySecret'

const questions = [question];

module.exports = { questions, currentUser,users,secret};