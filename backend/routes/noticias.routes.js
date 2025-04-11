// routes/noticias.routes.js


const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Noticia = require('../models/noticia.model');

// Configuración de multer // Es para subir imagenes
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Ruta que guarda la noticia
router.post('/noticias', upload.single('imagen'), async (req, res) => {
  const nueva = new Noticia({
    nombre: req.body.nombre,
    fecha_publicacion: req.body.fecha_publicacion,
    contenido: req.body.contenido,
    imagen: req.file ? `/uploads/${req.file.filename}` : null
  });

  await nueva.save();
  res.redirect('/noticias'); // Redirige o muestra mensaje
});

module.exports = router;