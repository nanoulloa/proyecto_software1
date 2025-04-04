const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../../frontend/public')));

app.listen(3000, () => {
    console.log("Servidorse conectó");
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/pages/index.html'));
});

