const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Noticia = require('../models/noticias.model');

router.get('/noticias-locales', (req, res) => {
    res.render(path.join(__dirname, '../../frontend/public/pages/noticias/noticias.html'));
  });

// Mostrar formulario para crear noticias
router.get('/noticias/crear', (req, res) => {
  res.render(path.join(__dirname, '../../frontend/public/pages/noticias/crear_noticias.html'));
});

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
  destination: './frontend/public/uploads', // Ruta correcta dentro del proyecto
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Guardar noticia
router.post('/noticias', upload.single('imagen'), async (req, res) => {
  const nueva = new Noticia({
    titulo: req.body.titulo,
    fecha_publicacion: req.body.fecha_publicacion,
    contenido: req.body.contenido,
    imagen: req.file ? `/uploads/${req.file.filename}` : null
  });

  await nueva.save();
  res.redirect('/noticias'); // Puedes cambiar a donde quieras redirigir
});

module.exports = router;