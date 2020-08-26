const express = require('express');
const router = require('./routes/router');
const config = require('./resources/config');

const app = express();
const PORT = process.env.PORT || 4000;

config(app);
router(app);

app.listen(PORT,() => {
    console.log(`Servidor corriendo en modo ${process.env.NODE_ENV}, en el puerto ${PORT}`);
});