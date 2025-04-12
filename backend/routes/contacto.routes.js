const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/avisos', (req, res) => {
    res.render(path.join(__dirname, '../../frontend/public/pages/avisos/avisos.html'));
  });

router.get('/crear-avisos', (req,res) => {/////⚠️aun no esta linkeado en ningun lugar⚠️/////
    res.render(path.join(__dirname,'../../frontend/public/pages/avisos/crear_avisos.html'));
});


module.exports = router;