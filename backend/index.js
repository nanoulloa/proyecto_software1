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


/*
// Sesión 
app.use(session({
  secret: 'SECRETO',
  resave: false,
  saveUninitialized: true
}));*/

app.use(session({
  secret: 'mi_clave_secreta',  // Cambia esta clave secreta por algo más seguro
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Si usas HTTP, cambia 'secure' a false. Para HTTPS ponlo como true
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

// Middleware para verificar si el usuario está autenticado (usando Passport)


const estaAutenticado = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('No autenticado');
};


// Middleware para verificar si el usuario es administrador
/*function soloAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user && req.user.rol === 'admin') {
      return next();
  }
  res.status(403).send("Acceso denegado");
}*/

function soloAdmin(req, res, next) {
  const sessionId = req.cookies.sessionId;
  const sesion = sesiones[sessionId];

  if (sesion && sesion.rol === 'admin') {
    return next();
  }

  res.status(403).send("Acceso denegado");
}

module.exports = {
  sesiones,
  soloAdmin
};

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

//denuncias

const denuncias_routes = require('./routes/denuncias.routes');
app.use('/', denuncias_routes); 

//Perfil usuario

const perfiUsuario_routes = require('./routes/perfiUsuario.routes');
app.use('/', perfiUsuario_routes); 


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
  req.session.destroy((err) => {
    if (err) {
      console.error("Error al cerrar sesión:", err);
      return res.status(500).send("No se pudo cerrar sesión");
    }
    // Redirigir a la página de inicio o login después de destruir la sesión
    res.redirect('/login');
  });
});



// Encender servidor
app.listen(3000, () => {
  console.log('Servidor conectado');
});

require('./db/db');

//post  
/*app.post('/add-login',(req,res)=>{
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
          maxAge: 3600000 
      });

      console.log('Cookie "sessionId" establecida.');

      console.log("credenciales validas");
      res.redirect('/dashboard');
  }else{
      console.log("las credenciales no son validas");
      res.redirect('/');
  } 
})
//pagina de control de usuarios */



app.post('/add-login', async (req, res) => {
  const { nombreUsuario, contrasena } = req.body;

  try {
    const usuario = await registro_model.findOne({ nombre: nombreUsuario });

    if (usuario && usuario.password === contrasena) {
      const sessionId = uuidv4();

      // Guardar sesión con nombre y rol
      sesiones[sessionId] = {
        nombreUsuario: usuario.nombre,
        rol: usuario.rol
      };

      // Guardar en la cookie
      res.cookie('sessionId', sessionId, {
        httpOnly: true,
        maxAge: 3600000 // 1 hora
      });

      console.log('Inicio de sesión exitoso para:', usuario.nombre);
      res.redirect('/dashboard');
    } else {
      console.log("Credenciales incorrectas");
      res.redirect('/');
    }
  } catch (error) {
    console.error("Error en la autenticación:", error);
    res.status(500).send("Error del servidor");
  }
});

const router = express.Router();
const Registro = require('./models/registro.model'); // modelo de usuario


router.get('/Control_Usuarios', estaAutenticado, soloAdmin, async (req, res) => {
  try {
      const usuarios = await Registro.find({}, 'nombre correo rol distrito');
      res.json(usuarios);
  } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
});


const CodigoRecuperacion = require('./models/codigos_recuperacion.model');
// Ruta backend: recibe correo, genera y envía código
app.post('/recuperacion-autenticacion', async (req, res) => {
  try {
    console.log("Cuerpo recibido:", req.body); // 👈 esto es clave

    const { email } = req.body;
    if (!email) {
      throw new Error("No se recibió el correo");
    }

    req.session.recoveryEmail = email;
    console.log("Email guardado en sesión:", email);

    const codigo = Math.floor(100000 + Math.random() * 900000);

    await CodigoRecuperacion.deleteMany({ email });
    await CodigoRecuperacion.create({ email, codigo });

    await enviarCorreo(email, codigo);

    console.log(`Código enviado a ${email}: ${codigo}`);

    res.redirect('/recuperacion-autenticacion');
  } catch (error) {
    console.error("Error en el proceso de recuperación:", error);
    res.status(500).send("Error en el proceso de recuperación");
  }
});
// Ruta backend: verifica el código
app.post('/recuperacion-nuevacontrasena', async (req, res) => {
  console.log("Datos de verificación recibidos:", req.body);
  
  const { numero_recuperacion_autenticacion } = req.body;
  const codigoNum = parseInt(numero_recuperacion_autenticacion, 10);
  
  // Usar el email guardado en la sesión desde el paso anterior
  const email = req.session.recoveryEmail;
  
  console.log("Código a verificar:", codigoNum);
  console.log("Email asociado:", email);
  
  if (!email) {
    console.log("Error: No se encontró email en la sesión");
    return res.status(400).send('No se encontró el email asociado para la recuperación');
  }

  try {
    const codigoGuardado = await CodigoRecuperacion.findOne({
      email: email,
      codigo: codigoNum
    });
    
    console.log("Resultado de búsqueda:", codigoGuardado);
    
    if (!codigoGuardado) {
      return res.status(400).send('Código incorrecto o expirado');
    }
    
    // Si llega aquí, el código es correcto - redirigir a cambio de contraseña
    res.redirect('/recuperacion-nuevacontrasena');
  } catch (error) {
    console.error("Error verificando código:", error);
    return res.status(500).send('Error interno al verificar el código');
  }
});

// Ruta para procesar el cambio de contraseña
app.post('/recuperacion-finalizar', async (req, res) => {
  console.log("Datos de nueva contraseña recibidos:", req.body);
  
  const { password, confirmPassword } = req.body;
  // Usar el email de la sesión guardado anteriormente
  const email = req.session.recoveryEmail;
  
  console.log("Email para cambio de contraseña:", email);
  
  if (!email) {
    console.log("Error: No se encontró email en la sesión");
    return res.status(400).send('No se encontró el email asociado para la recuperación');
  }
  
  if (!password || !confirmPassword) {
    return res.status(400).send('Debe completar todos los campos');
  }
  
  if (password !== confirmPassword) {
    return res.status(400).send('Las contraseñas no coinciden');
  }
  
  try {
    // Verificar que el usuario existe
    const usuario = await registro_model.findOne({ correo: email });
    if (!usuario) {
      return res.status(404).send('Usuario no encontrado');
    }
    
    // Actualizar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    await registro_model.updateOne(
      { correo: email },
      { $set: { password: hashedPassword } }
    );
    
    // Eliminar los códigos de recuperación usados
    await CodigoRecuperacion.deleteMany({ email });
    
    // Limpiar la sesión
    delete req.session.recoveryEmail;
    
    console.log("Contraseña actualizada con éxito para:", email);
    
    // Mostrar mensaje de éxito y redirigir
    res.send(`<script>
      alert("Contraseña actualizada con éxito");
      window.location.href = "/login";
    </script>`);
  } catch (error) {
    console.error("Error al actualizar contraseña:", error);
    res.status(500).send('Error interno al actualizar la contraseña');
  }
});

const bcrypt = require('bcryptjs');

app.post('/recuperacion-finalizar', async (req, res) => {
    const { email, nueva_password } = req.body;

    const hash = await bcryptjs.hash(nueva_password, 10);
    await registro_model.updateOne({ correo: email }, { password: hash });

    // Elimina códigos usados
    await codigos_recuperacion.deleteMany({ email });

    res.send('Contraseña actualizada correctamente');
});

const nodemailer = require('nodemailer');

async function enviarCorreo(email, codigo) {
  try {
    // Crear transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'marianoburpy@gmail.com', 
        pass: 'phgm vtbo zuak lawf' 
      }
    });

    // Configurar el mensaje
    const mailOptions = {
      from: '', 
      to: email,
      subject: 'Código de recuperación de contraseña',
      text: `Tu código de recuperación es: ${codigo}`
    };

    // Enviar el correo
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error('Error al enviar el correo');
  }
}


app.get('/api/sesion-activa', (req, res) => {
  if (req.session.usuario) {
    res.json({
      logueado: true,
      nombreUsuario: req.session.usuario.nombre,
      rol: req.session.usuario.rol
    });
  } else {
    res.json({ logueado: false });
  }
});

module.exports = router;
