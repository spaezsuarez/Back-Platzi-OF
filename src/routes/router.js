const questionController = require('../controllers/questionController');

//Exportando la funcion de configuracion
module.exports = (server) => {
    server.use('/questions',questionController);

}