const mongoose = require('mongoose');


//schema


const denuncias_schema = mongoose.Schema({
    fecha: String,
    comentario: String,
    imagen: String,
}, { versionKey: false });

//model

const denuncias_model = mongoose.model("denuncias", denuncias_schema, "denuncias")

module.exports = denuncias_model;