const express = require('express');
const router = express.Router();
const path = require('path');
const aviso = require('../models/avisos.model');
const aviso_model = require('../models/avisos.model');

router.get('/avisos', (req, res) => {
    res.render(path.join(__dirname, '../../frontend/public/pages/avisos/avisos.html'));
  });

router.get('/crear-avisos', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../../frontend/public/pages/avisos/crear_avisos.html'));
});


router.post("/crear-aviso", async (req,res) => {
    const nueva = new aviso({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
    });

    await nueva.save();
    res.redirect('/avisos');
});


router.get('/mostrar_avisos', async (req, res) => {
    try {
      const avisos = await avisos_model.find();
      res.json(avisos); 
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los avisos', error });
    }
  });


module.exports = router;