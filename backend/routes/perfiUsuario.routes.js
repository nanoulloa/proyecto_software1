const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/perfil-usuario', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/public/pages/perfil_usuario/perfiUsuario.html'));
});

module.exports = router;