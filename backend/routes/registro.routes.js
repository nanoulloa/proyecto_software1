const express = require('express');
const router = express.Router();
const path = require('path');
const Registro = require('../models/registro.model');
const registro_model = require('../models/registro.model');

router.get('/registro', (req,res) => {
    res.render(path.join(__dirname,'../../frontend/public/pages/registro/registro.html'));
});

// Guardar usuario
router.post('/registro_crear', async (req, res) => {
  const nueva = new Registro({
    nombre: req.body.nombre,
    correo:  req.body.correo,
    password:  req.body.password,
    telefono: req.body.telefono,
    canton:  req.body.canton,
    distrito:  req.body.distrito,
    direccion:  req.body.direccion
  });

  await nueva.save();
  res.redirect('/login'); // donde quiero redirigir despues
});

module.exports = router;
