const mongoose = require('mongoose');

const CodigoRecuperacionSchema = new mongoose.Schema({
    email: { type: String, required: true },
    codigo: { type: Number, required: true }
  });
  
  const CodigoRecuperacion = mongoose.model('CodigoRecuperacion', CodigoRecuperacionSchema);
  
  module.exports = CodigoRecuperacion;