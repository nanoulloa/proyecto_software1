const mongoose = require('mongoose');

const aviso_schema = mongoose.Schema({
    titulo: String,
    contenido: String
}, { versionKey: false });

const aviso_model = mongoose.model("avisos", aviso_schema, "avisos");


module.exports = aviso_model;