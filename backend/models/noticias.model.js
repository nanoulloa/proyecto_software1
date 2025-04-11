//schema

const noticias_schema = mongoose.Schema({
    nombre:String,
    fecha_publicacion:String,
    contenido:String,
},{versionKey:false})

//model

const noticias_model = mongoose.model("noticias", noticias_schema)

module.exports = noticias_model;