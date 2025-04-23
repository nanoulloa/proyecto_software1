const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid'); // para generar ID únicos para sesiones

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'../frontend/public')));

// Base de datos temporal de sesiones
const sesiones = {};

//middleware
function auth(req, res, next) {
  const sessionId = req.cookies.sessionId;

  if (sessionId && sesiones[sessionId]) {
      req.user = sesiones[sessionId];
      next();
  } else {
      res.redirect('/');
  }
}

//valida si el usuario es admin
function soloAdmin(req, res, next) {
  if (req.user && req.user.rol === 'admin') {
      next();
  } else {
      res.status(403).send("Acceso denegado");
  }
}

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

//ruta de logout
app.get('/logout', (req, res) => {
  const sessionId = req.cookies.sessionId;
  delete sesiones[sessionId];
  res.clearCookie('sessionId');
  res.redirect('/');
});



// Encender servidor
app.listen(3000, () => {
  console.log('Servidor conectado');
});

require('./db/db');

//post 
app.post('/add-login',(req,res)=>{
  console.log(req.body.nombreUsuario, req.body.contrasena,req.body);
  const { nombreUsuario } = req.body;
  if((req.body.nombreUsuario==="elnombre de usuario")&&(req.body.contrasena==="la contrasena")){
      const sessionId = uuidv4();

        // Guardar sesión con nombre y rol
        sesiones[sessionId] = {
          nombreUsuario: usuario.nombreUsuario,
          rol: usuario.rol//aqui hay que pedirle el rol a mongo 
      };
      
      // Guardar en la cookie
      res.cookie('sessionId', sessionId, {
          httpOnly: true,
          maxAge: 3600000 // 1h
      });

      console.log("credenciales validas");
      res.redirect('/dashboard');
  }else{
      console.log("las credenciales no son validas");
      res.redirect('/');
  } 
})
