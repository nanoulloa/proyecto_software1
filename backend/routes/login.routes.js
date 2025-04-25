const express = require('express');
const router = express.Router();
const path = require('path');

const Registro = require('../models/registro.model'); // Modelo de MongoDB

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/pages/log_in/login.html'));
});

/* Ruta que procesa el login
//router.post('/login', async (req, res) => {
    const { correo, password } = req.body;
  
    // Validar campos vacíos
    if (!correo || !password) {
      return res.send(`<script>alert("Por favor complete todos los campos."); window.location.href="/login";</script>`);
    }
  
    try {
      // Buscar usuario en la base de datos
      const usuario = await Registro.findOne({ correo });
  
      if (!usuario) {
        // Usuario no encontrado
        return res.send(`<script>alert("Usuario no encontrado."); window.location.href="/log-in";</script>`);
      }
  
      // Comparar contraseña (sin encriptar por ahora)
      if (usuario.password !== password) {
        return res.send(`<script>alert("Contraseña incorrecta."); window.location.href="/log-in";</script>`);

      }
  
      // Si todo está bien, redirigir a la página de inicio
      return res.redirect('/');
  
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return res.send(`<script>alert("Error en el servidor. Inténtelo más tarde."); window.location.href="/login";</script>`);
    }
  });*/

  router.post('/login', async (req, res) => {
    const { correo, password } = req.body;
  
    // Validar campos vacíos
    if (!correo || !password) {
      return res.send(`<script>alert("Por favor complete todos los campos."); window.location.href="/login";</script>`);
    }
  
    try {
      // Buscar usuario en la base de datos
      const usuario = await Registro.findOne({ correo });
  
      if (!usuario) {
        return res.send(`<script>alert("Usuario no encontrado."); window.location.href="/log-in";</script>`);
      }
  
      // Comparar contraseña (sin encriptar por ahora)
      if (usuario.password !== password) {
        return res.send(`<script>alert("Contraseña incorrecta."); window.location.href="/log-in";</script>`);
      }
  
      // Si todo está bien, guardar los datos del usuario en la sesión
      req.session.usuario = {
        correo: usuario.correo,
        nombre: usuario.nombre,
        rol: usuario.rol
      };
  
      // Redirigir a la página de inicio
      return res.redirect('/');
  
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return res.send(`<script>alert("Error en el servidor. Inténtelo más tarde."); window.location.href="/login";</script>`);
    }
  });


router.get('/log-in', (req,res) => {
    res.render(path.join(__dirname,'../../frontend/public/pages/log_in/login.html'));
});

router.get('/autentificacion_log-in', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/pages/log_in/autenticacionlogin.html'));
});


// Recuperación
router.get('/recuperacion', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/pages/recuperacion/recuperacion.html'));
});

router.get('/recuperacion-nuevacontrasena', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/pages/recuperacion/nuevacontrasena.html'));
});

router.get('/recuperacion-autenticacion', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/pages/recuperacion/autenticacion.html'));
});


module.exports = router;