const mongoose = require('mongoose');


//schema


const noticias_schema = mongoose.Schema({
    titulo: String,
    fecha_publicacion: String,
    contenido: String,
    imagen: String
}, { versionKey: false });

//model

const noticias_model = mongoose.model("noticias", noticias_schema, "noticias")

module.exports = noticias_model;