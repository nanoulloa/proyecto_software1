const express = require('express');

const app = express();
const path = require('path');

app.engine('html',require('ejs').renderFile);//transforma archivos html a ejs
app.set('view engine','ejs');// usar html como motor de vista

//archivos estaticos
app.use(express.static(path.join(__dirname,'src')));



//encender el servidor
app.listen(3000, () => {
    console.log("Servidorse conectó");
});


///////////////////////////
//rutas///
app.get('/', (req,res) => {
    res.render(path.join(__dirname,'src/pages/index.html'));
});

app.get('/log-in', (req,res) => {
    res.render(path.join(__dirname,'src/pages/log_in/login.html'));
});

app.get('/registro', (req,res) => {
    res.render(path.join(__dirname,'src/pages/registro/registro.html'));
});

app.get('/contacto', (req,res) => {
    res.render(path.join(__dirname,'src/pages/contacto/contactoIndex.html'));
});

app.get('/noticias-locales', (req,res) => {
    res.render(path.join(__dirname,'src/pages/noticias/noticias.html'));
});

app.get('/avisos', (req,res) => {
    res.render(path.join(__dirname,'src/pages/avisos/avisos.html'));
});

app.get('/iniciativas', (req,res) => {
    res.render(path.join(__dirname,'src/pages/iniciativas/iniciativas-aprobadas.html'));
});

app.get('/servicios', (req,res) => {
    res.render(path.join(__dirname,'src/pages/servicios/servicios.html'));
});



