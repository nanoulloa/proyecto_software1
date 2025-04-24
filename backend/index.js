const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid'); // para generar ID únicos para sesiones

const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const registro_model = require('./models/registro.model');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'../frontend/public')));

// Sesión
app.use(session({
  secret: 'SECRETO',
  resave: false,
  saveUninitialized: true
}));

// Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());

// Serialización y deserialización del usuario
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Configurar Google
passport.use(new GoogleStrategy({
    clientID: '909532331989-r9vpotimhio2ccpdtkphldidhhgbmc4s.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;

    try {
      const usuario = await registro_model.findOne({ correo: email });
      if (usuario) {
        return done(null, usuario); // Usuario registrado
      } else {
        return done(null, false, { message: 'Este correo no está registrado en nuestra plataforma' });
      }
    } catch (err) {
      console.error('Error consultando en Mongoose:', err);
      return done(err);
    }
  }
));

// Ruta para iniciar sesión con Google
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Ruta de callback después de autenticarse
app.get('/auth/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login?error=Este%20correo%20no%20est%C3%A1%20registrado',
    failureMessage: true
  }),
  (req, res) => {
    // Si el login fue exitoso, crear una sesión
    const sessionId = uuidv4();
    
    // Guardar sesión con datos del usuario
    sesiones[sessionId] = {
      nombreUsuario: req.user.nombreUsuario,
      correo: req.user.correo,
      rol: req.user.rol
    };
    
    // Establecer cookie de sesión
    res.cookie('sessionId', sessionId, {
      httpOnly: true,
      maxAge: 3600000 // 1 hora
    });
    
    // Redirigir a la ruta principal del sitio
    res.redirect('/');
  }
);


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
//pagina de control de usuarios 

const router = express.Router();
const Registro = require('../models/registro.model'); // modelo de usuario
const { verificarAdmin } = require('authenticate'); 

router.get('/usuarios', verificarAdmin, async (req, res) => {
  try {
    const usuarios = await Registro.find({}, 'nombre correo rol distrito');
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
});

module.exports = router;
