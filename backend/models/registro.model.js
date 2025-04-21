const mongoose = require('mongoose');


//schema
const registro_schema = mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  telefono: { type: String },
  canton: { type: String },
  distrito: { type: String },
  direccion: { type: String }
}, { versionKey: false });

//model

const registro_model = mongoose.model("registro", registro_schema, "registro")

module.exports = registro_model;