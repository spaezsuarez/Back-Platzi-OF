const bodyParser = require('body-parser');
const db = require('./db');

module.exports = (server) => {

    server.use(bodyParser.urlencoded({extended:true}));
    server.use(bodyParser.json());

    db.start();

    if(process.env.NODE_ENV === 'development'){
        server.use((req,res,next) => {
            res.setHeader('Access-Control-Allow-Origin','*');
            res.setHeader('Access-Control-Allow-Headers','Origin,X-Request-With,Content-Type,Accept');
            res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS');
            next();
        });
    }
}