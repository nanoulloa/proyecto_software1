const express = require('express');
const app = express();
const path = require('path');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname,'../frontend/public')));

// Importar rutas

//ruta del index
const index_routes = require('./routes/index.routes');
app.use('/', index_routes); 

// avisos

const avisos_routes = require('./routes/avisos.routes');
app.use('/', avisos_routes); 

//noticias

const noticias_routes = require('./routes/noticias.routes');
app.use('/', noticias_routes); 

//servicios

const servicios_routes = require('./routes/servicios.routes');
app.use('/', servicios_routes); 

//contacto

const contacto_routes = require('./routes/contacto.routes');
app.use('/', contacto_routes); 

//iniciativas

const iniciativas_routes = require('./routes/iniciativas.routes');
app.use('/', iniciativas_routes); 

//login

const login_routes = require('./routes/login.routes');
app.use('/', login_routes); 

//registro

const registro_routes = require('./routes/registro.routes');
app.use('/', registro_routes);


// Encender servidor
app.listen(3000, () => {
  console.log('Servidor conectado');
});

require('./db/db');
