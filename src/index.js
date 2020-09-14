const express = require('express');
const comadaroutes = require('./routes/comandas.js');

//Archivo de base de datos
require('./db');

const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Ruta para usar las rutas
server.use('/comanda', comadaroutes);

//Funcion que hace escuchar al puerto
server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});