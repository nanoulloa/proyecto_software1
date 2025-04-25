const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/perfil-usuario', (req, res) => {
  res.render(path.join(__dirname, '../../frontend/public/pages/perfil_usaurio/perfiUsuario.html'));
});

module.exports = router;