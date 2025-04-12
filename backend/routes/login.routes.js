const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/log-in', (req,res) => {
    res.render(path.join(__dirname,'../../frontend/public/pages/log_in/login.html'));
});

router.get('/autentificacion_log-in', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../../frontend/public/pages/log_in/autenticacionlogin.html'));
});


//recuperacion
router.get('/recuperacion', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../../frontend/public/pages/recuperacion/recuperacion.html'));
});

router.get('/recuperacion-nuevacontrasena', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../../frontend/public/pages/recuperacion/nuevacontrasena.html'));
});

router.get('/recuperacion-autenticacion', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../../frontend/public/pages/recuperacion/autenticacion.html'));
});

module.exports = router;