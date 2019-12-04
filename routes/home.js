const express = require('express');

const app = express();

/**
 * Home del server --> /
 */
app.get('/', (req, res) => {

    let objeto = {
        mensaje: "Bienvenido al REST server - 5AMPROM Equipo 05"
    };

    res.send(objeto);

});

module.exports = app;