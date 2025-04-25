const express = require('express');
const router = express.Router();
const path = require('path');
const Registro = require('../models/registro.model');
const registro_model = require('../models/registro.model');

router.get('/perfil-usuario', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/public/pages/perfil_usuario/perfiUsuario.html'));
});

router.get('/mostrar-perfil-usuario', async (req, res) => {
  try {
    const perfil = await registro_model.find();
    res.json(perfil); // ¡No pongas { noticias }, simplemente devuelve el arreglo!
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener perfil', error });
  }
});

module.exports = router;