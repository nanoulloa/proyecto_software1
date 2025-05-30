const mongoose = require('mongoose');


//schema
const registro_schema = mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telefono: { type: String },
  canton: { type: String },
  distrito: { type: String },
  direccion: { type: String },
  rol: { type: String }
}, { versionKey: false });

//model

const registro_model = mongoose.model("registro", registro_schema);

module.exports = registro_model;