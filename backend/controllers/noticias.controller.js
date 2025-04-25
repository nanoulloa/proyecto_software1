const Noticia = require('../models/noticias.model');

// CRUD

// Crear
exports.crearNoticia = async (req, res) => {
    try {
      const nuevaNoticia = new Noticia(req.body);
      await nuevaNoticia.save();
      res.status(201).json(nuevaNoticia);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Leer todas
  exports.obtenerNoticias = async (req, res) => {
    try {
      const noticias = await Noticia.find();
      res.json(noticias);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Leer una por ID
  exports.obtenerNoticiaPorId = async (req, res) => {
    try {
      const noticia = await Noticia.findById(req.params.id);
      if (!noticia) return res.status(404).json({ mensaje: "No encontrada" });
      res.json(noticia);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Actualizar
  exports.actualizarNoticia = async (req, res) => {
    try {
      const noticia = await Noticia.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(noticia);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Eliminar
  exports.eliminarNoticia = async (req, res) => {
    try {
      await Noticia.findByIdAndDelete(req.params.id);
      res.json({ mensaje: "Noticia eliminada" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };