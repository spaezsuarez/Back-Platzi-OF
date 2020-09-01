const questionRoute = require('./questionRoute');
const authRoute = require('./authRoute');
const test = require('./questions');

//Exportando la funcion de configuracion
module.exports = (server) => {
    server.use('/questions',questionRoute);
    server.use('/auth',authRoute);
    server.use('/test',test);
}