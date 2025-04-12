const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/servicios', (req,res) => {
    res.render(path.join(__dirname,'../../frontend/public/pages/servicios/servicios.html'));
});

module.exports = router;