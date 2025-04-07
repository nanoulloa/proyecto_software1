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
///////////////////////////////

//avisos
app.get('/avisos', (req,res) => {
    res.render(path.join(__dirname,'src/pages/avisos/avisos.html'));
});

app.get('/crear-avisos', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'src/pages/avisos/crear_avisos.html'));
});
///////////////////////////////

//contacto
app.get('/contacto', (req,res) => {
    res.render(path.join(__dirname,'src/pages/contacto/contactoIndex.html'));
});
///////////////////////////////

//control usuarios
app.get('/control-usuarios', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'src/pages/control_usuarios/ControlUsuarios.html'));
});
//////////////////////////////

//denuncias
app.get('/denuncias', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'src/pages/denuncias/denuncias.html'));
});
//////////////////////////////

//iniciativas
app.get('/iniciativas', (req,res) => {
    res.render(path.join(__dirname,'src/pages/iniciativas/iniciativas-aprobadas.html'));
});

app.get('/crear-iniciativas', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'src/pages/iniciativas/iniciativa.html'));
});
///////////////////////////////

//log in
app.get('/log-in', (req,res) => {
    res.render(path.join(__dirname,'src/pages/log_in/login.html'));
});

app.get('/autentificacion_log-in', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'src/pages/log_in/autenticacionlogin.html'));
});
///////////////////////////////

//noticias
app.get('/noticias-locales', (req,res) => {
    res.render(path.join(__dirname,'src/pages/noticias/noticias.html'));
});

///////////////////////////////

//perfil de usuario
app.get('/perfil-usuario', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'src/pages/perfil_usuario/perfiUsuario.html'));
});
//////////////////////////////

//recuperacion
//////////////////////////////

//registro
app.get('/registro', (req,res) => {
    res.render(path.join(__dirname,'src/pages/registro/registro.html'));
});
///////////////////////////////

//servicios
app.get('/servicios', (req,res) => {
    res.render(path.join(__dirname,'src/pages/servicios/servicios.html'));
});
///////////////////////////////







//              ,----------------,              ,---------,
//         ,-----------------------,          ,"        ,"|
//       ,"                      ,"|        ,"        ,"  |
//      +-----------------------+  |      ,"        ,"    |
//      |  .-----------------.  |  |     +---------+      |
//      |  |                 |  |  |     | -==----'|      |
//      |  |  dont make a    |  |  |     |         |      |
//      |  |  call back hell |  |  |/----|`---=    |      |
//      |  |  C:\>_          |  |  |   ,/|==== ooo |      ;
//      |  |                 |  |  |  // |(((( [33]|    ,"
//      |  `-----------------'  |," .;'| |((((     |  ,"
//      +-----------------------+  ;;  | |         |,"     -Kevin Lam-
//         /_)______________(_/  //'   | +---------+
//    ___________________________/___  `,
//   /  oooooooooooooooo  .o.  oooo /,   \,"-----------
//  / ==ooooooooooooooo==.o.  ooo= //   ,`\--{)B     ,"
// /_==__==========__==_ooo__ooo=_/'   /___________,"                `-._.'



