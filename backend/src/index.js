const express = require('express');

const app = express();
const path = require('path')

//Encender servidor

app.listen(3000,()=>{
    console.log("Se conecto el puerto")
})

//Rutas

app.get("/",(req,res)=>{
    res.send("Hola")
});

app.get("/noticias",(req,res)=>{
    res.send("/")
});

