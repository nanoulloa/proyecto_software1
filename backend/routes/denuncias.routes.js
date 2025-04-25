const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const denuncia = require('../models/denuncias.model');
const denuncias_model = require('../models/denuncias.model');

router.get('/denuncias', (req, res) => {
  res.render(path.join(__dirname, '../../frontend/public/pages/denuncias/denuncias.html'));
});


const storage = multer.diskStorage({
  destination: (path.join(__dirname, '../../frontend/public/img/uploads')), // Ruta correcta dentro del proyecto
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });


// Guardar noticia
router.post('/crear_denuncia', upload.single('imagen'), async (req, res) => {
  const nueva = new denuncia({
    fecha: req.body.fecha,
    comentario: req.body.comentario,
    imagen: req.file ? `/uploads/${req.file.filename}` : null
  });

  await nueva.save();
  res.redirect('/'); // donde quiero redirigir despues
});


router.get('/mostrar_Denuncias', async (req, res) => {
  try {
    const denuncias = await denuncias_model.find();
    res.json(denuncias); // ¡No pongas { noticias }, simplemente devuelve el arreglo!
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las noticias', error });
  }
});


module.exports = router;