const express = require('express');
const router = express.Router();
const path = require('path');

const { soloAdmin } = require('../../backend/index'); // si lo tenés separado

// Si no lo tenés separado, asegurate que esté en el mismo archivo o lo exportás desde index.js

// ⚠️ También necesitás acceso a `sesiones`
const sesiones = require('../index').sesiones; // solo si no lo tenés en otro módulo

router.get('/iniciativas', (req,res) => {
    res.render(path.join(__dirname,'../../frontend/public/pages/iniciativas/iniciativas-aprobadas.html'));
});

/*router.get('/crear-iniciativas',soloAdmin, (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../../frontend/public/pages/iniciativas/iniciativa.html'),{
        usuario: req.user.nombreUsuario,
        rol: req.user.rol
    });
});*/

router.get('/crear-iniciativas', soloAdmin, (req, res) => {
    const sessionId = req.cookies.sessionId;
    const sesion = sesiones[sessionId];

    // Obtener datos del usuario desde Passport o desde tu sesión manual
    const usuario = req.user?.nombreUsuario || sesion?.nombreUsuario || 'Invitado';
    const rol = req.user?.rol || sesion?.rol || 'usuario';

    res.render(path.join(__dirname, '../../frontend/public/pages/iniciativas/iniciativa.html'), {
        usuario,
        rol
    });
});

module.exports = router;