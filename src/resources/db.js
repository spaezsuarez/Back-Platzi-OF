const mongoose = require('mongoose');
const { uri } = require('../private/credentialsDB');
const uniqueValidator = require('mongoose-unique-validator')

mongoose.Promise = global.Promise;

function getConnection(){
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then((any) => {
        console.log(`Conexion a la base de datos ${any.connections[0].name} exitosa`);
    }).catch((error) => {
        console.error(error);
    })
}

module.exports = {
    start:getConnection,
    mongoose:mongoose,
    Schema:mongoose.Schema,
    validator:uniqueValidator
};