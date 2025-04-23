/*const express = require('express');
const router = express.Router();
const path = require('path');
const Registro = require('../models/registro.model');
const registro_model = require('../models/registro.model');

router.get('/registro', (req,res) => {
    res.render(path.join(__dirname,'../../frontend/public/pages/registro/registro.html'));
});

// Guardar usuario
router.post('/registro_crear', async (req, res) => {
  const nueva = new Registro({
    nombre: req.body.nombre,
    correo:  req.body.correo,
    password:  req.body.password,
    telefono: req.body.telefono,
    canton:  req.body.canton,
    distrito:  req.body.distrito,
    direccion:  req.body.direccion
  });

  await nueva.save();
  res.redirect('/login'); // donde quiero redirigir despues
});

module.exports = router;
*/


const express = require('express');
const router = express.Router();
const registro_model = require('../models/registro.model'); // Importa el modelo de datos




// Ruta para crear un nuevo usuario
router.post('/registro_crear', async (req, res) => {
    const { nombre, correo, password, telefono, canton, distrito, direccion } = req.body;

    if (!nombre || !correo || !password) {
        return res.status(400).json({ message: 'Faltan datos requeridos' });
    }

    try {
        // Aquí creas un nuevo registro en la base de datos
        const nuevoUsuario = new registro_model({
            nombre,
            correo,
            password,
            telefono,
            canton,
            distrito,
            direccion
        });

        await nuevoUsuario.save(); // Guarda el nuevo usuario en la base de datos

        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
});

module.exports = router; // Exporta las rutas para usarlas en el archivo principal