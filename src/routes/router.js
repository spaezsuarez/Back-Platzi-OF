const questionRoute = require('./questionRoute');
const authRoute = require('./authRoute');

//Exportando la funcion de configuracion
module.exports = (server) => {
    server.use('/questions',questionRoute);
    server.use('/auth',authRoute);
}