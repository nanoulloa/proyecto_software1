const express = require('express');
const router = express.Router();
const path = require('path');
const Registro = require('../models/registro.model');
const registro_model = require('../models/registro.model');
const sesiones = require('../index').sesiones; // Asegurate de importar sesiones correctamente
const { estaAutenticado } = require('../index'); // Aj

router.get('/perfil-usuario', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/public/pages/perfil_usuario/perfiUsuario.html'));
});


router.get('/mostrar-perfil-usuario', estaAutenticado, (req, res) => {
  const sessionId = req.cookies.sessionId;
  const sesion = sesiones[sessionId];

  if (!sesion) {
    return res.status(401).json({ mensaje: 'Sesión no válida o expirada' });
  }

  res.json({
    nombre: sesion.nombreUsuario,
    correo: sesion.correo,
    telefono: sesion.telefono,
    canton: sesion.canton,
    distrito: sesion.distrito,
    direccion: sesion.direccion,
    rol: sesion.rol
  });
});

module.exports = router;