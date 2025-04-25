const express = require('express');
const router = express.Router();
const path = require('path');

function soloAdmin(req, res, next) {
    if (req.user && req.user.rol === 'admin') {
        next();
    } else {
        res.status(403).send("Acceso denegado");
    }
}

router.get('/iniciativas', (req,res) => {
    res.render(path.join(__dirname,'../../frontend/public/pages/iniciativas/iniciativas-aprobadas.html'));
});

router.get('/crear-iniciativas',soloAdmin, (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../../frontend/public/pages/iniciativas/iniciativa.html'),{
        usuario: req.user.nombreUsuario,
        rol: req.user.rol
    });
});

module.exports = router;