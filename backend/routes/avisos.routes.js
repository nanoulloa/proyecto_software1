const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/contacto', (req,res) => {
    res.render(path.join(__dirname,'../../frontend/public/pages/contacto/contactoIndex.html'));
});


module.exports = router;