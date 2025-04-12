const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/registro', (req,res) => {
    res.render(path.join(__dirname,'../../frontend/public/pages/registro/registro.html'));
});

module.exports = router;