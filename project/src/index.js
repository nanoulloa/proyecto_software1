const express = require('express');

const app = express();
const path = require('path');

app.engine('html',require('ejs').renderFile);//transforma archivos html a ejs
app.set('view engine','ejs');// usar html como motor de vista

//esto define la ruta por defecto para archivos estaticos(css,js y tono lo que no sea index)
app.use(express.static(path.join(__dirname,'../frontend/public')));

console.log(__dirname,'../frontend/public')

//esto enciende el servidor
app.listen(3000, () => {
    console.log("Servidorse conectó");
});


///////////////////////////
//rutas///
app.get('/', (req,res) => {
    res.render(path.join(__dirname,'../frontend/public/pages/index.html'));
});
///////////////////////////////

//avisos
app.get('/avisos', (req,res) => {
    res.render(path.join(__dirname,'../frontend/public/pages/avisos/avisos.html'));
});

app.get('/crear-avisos', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/avisos/crear_avisos.html'));
});
///////////////////////////////

//contacto
app.get('/contacto', (req,res) => {
    res.render(path.join(__dirname,'../frontend/public/pages/contacto/contactoIndex.html'));
});
///////////////////////////////

//control usuarios
app.get('/control-usuarios', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/control_usuarios/ControlUsuarios.html'));
});
//////////////////////////////

//denuncias
app.get('/denuncias', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/denuncias/denuncias.html'));
});
//////////////////////////////

//iniciativas
app.get('/iniciativas', (req,res) => {
    res.render(path.join(__dirname,'../frontend/public/pages/iniciativas/iniciativas-aprobadas.html'));
});

app.get('/crear-iniciativas', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/iniciativas/iniciativa.html'));
});
///////////////////////////////

//log in
app.get('/log-in', (req,res) => {
    res.render(path.join(__dirname,'../frontend/public/pages/log_in/login.html'));
});

app.get('/autentificacion_log-in', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/log_in/autenticacionlogin.html'));
});
///////////////////////////////

//noticias
app.get('/noticias-locales', (req,res) => {
    res.render(path.join(__dirname,'../frontend/public/pages/noticias/noticias.html'));
});

app.get('/noticias-bandera-azul', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/noticias/banderaazul_noticia.html'));
});

app.get('/noticias-conveniouned', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/noticias/conveniouned_noticia.html'));
});

app.get('/noticias-crear-noticias', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/noticias/crear_noticias.html'));
});

app.get('/noticias-exoneracionimpuesto', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/noticias/exoneracionimpuesto_noticia.html'));
});

app.get('/noticias-mejorasparque', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/noticias/mejorasparque_noticia.html'));
});

///////////////////////////////

//perfil de usuario
app.get('/perfil-usuario', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/perfil_usuario/perfiUsuario.html'));
});
//////////////////////////////

//recuperacion
app.get('/recuperacion', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/recuperacion/recuperacion.html'));
});

app.get('/recuperacion-nuevacontrasena', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/recuperacion/nuevacontrasena.html'));
});

app.get('/recuperacion-autenticacion', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../frontend/public/pages/recuperacion/autenticacion.html'));
});
//////////////////////////////

//registro
app.get('/registro', (req,res) => {
    res.render(path.join(__dirname,'../frontend/public/pages/registro/registro.html'));
});
///////////////////////////////

//servicios
app.get('/servicios', (req,res) => {
    res.render(path.join(__dirname,'../frontend/public/pages/servicios/servicios.html'));
});
///////////////////////////////


//data base mongo atlas

require("./db/db")






//              ,----------------,              ,---------,
//         ,-----------------------,          ,"        ,"|
//       ,"                      ,"|        ,"        ,"  |
//      +-----------------------+  |      ,"        ,"    |
//      |  .-----------------.  |  |     +---------+      |
//      |  |                 |  |  |     | -==----'|      |
//      |  |  dont make a    |  |  |     |         |      |
//      |  |  callback hell  |  |  |/----|`---=    |      |
//      |  |  C:\>_          |  |  |   ,/|==== ooo |      ;
//      |  |                 |  |  |  // |(((( [33]|    ,"
//      |  `-----------------'  |," .;'| |((((     |  ,"
//      +-----------------------+  ;;  | |         |,"     -Kevin Lam-
//         /_)______________(_/  //'   | +---------+
//    ___________________________/___  `,
//   /  oooooooooooooooo  .o.  oooo /,   \,"-----------
//  / ==ooooooooooooooo==.o.  ooo= //   ,`\--{)B     ,"
// /_==__==========__==_ooo__ooo=_/'   /___________,"                `-._.'



