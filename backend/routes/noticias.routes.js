const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Noticia = require('../models/noticias.model');
const noticias_model = require('../models/noticias.model');

router.get('/noticias-locales', (req, res) => {
    res.render(path.join(__dirname, '../../frontend/public/pages/noticias/noticias.html'));
  });

router.get('/noticias/crear', (req, res) => {
  res.render(path.join(__dirname, '../../frontend/public/pages/noticias/crear_noticias.html'));
});



// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
  destination: (path.join(__dirname, '../../frontend/public/img/uploads')), // Ruta correcta dentro del proyecto
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Guardar noticia
router.post('/crear_noticias', upload.single('imagen'), async (req, res) => {
  const nueva = new Noticia({
    titulo: req.body.titulo,
    fecha_publicacion: req.body.fecha_publicacion,
    contenido: req.body.contenido,
    imagen: req.file ? `/uploads/${req.file.filename}` : null
  });

  await nueva.save();
  res.redirect('/noticias-locales'); // donde quiero redirigir despues
});

//mostrar noticias

router.get('/mostrar_noticias', async (req, res) => {
  try {
    const noticias = await noticias_model.find();
    res.json(noticias); // ¡No pongas { noticias }, simplemente devuelve el arreglo!
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las noticias', error });
  }
});

module.exports = router;