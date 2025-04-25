const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/denuncias', (req, res) => {
  res.render(path.join(__dirname, '../../frontend/public/pages/denuncias/denuncias.html'));
});

module.exports = router;