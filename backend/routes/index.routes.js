const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../../frontend/public/pages/index.html'));
});

module.exports = router;