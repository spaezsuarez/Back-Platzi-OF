const questionController = require('../controllers/questionController');
const authController = require('../controllers/authController');

//Exportando la funcion de configuracion
module.exports = (server) => {
    server.use('/questions',questionController);
    server.use('/auth',authController);
}