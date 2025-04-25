const $codigoInput = document.getElementById('numero_recuperacion_autenticacion');
const $formulario = document.querySelector('.formulario_recuperacion_autenticacion form');
const $grupoAutenticacion = document.getElementById('grupo_recuperacion_autenticacion');

// Expresión regular para verificar que sea un número de 6 dígitos (ajusta según tus necesidades)
const expresionCodigo = /^\d{6}$/;

let campoValido = false;

const validarCodigo = () => {
    const valor = $codigoInput.value.trim();
    
    if(expresionCodigo.test(valor)) {
        // Código válido
        $grupoAutenticacion.classList.remove("recuperacion_autenticacion-incorrecto");
        $grupoAutenticacion.classList.add("recuperacion_autenticacion-correcto");
        document.querySelector('.recuperacion_autenticacion__grupo-input i').classList.remove("bxs-x-circle");
        document.querySelector('.recuperacion_autenticacion__grupo-input i').classList.add("bxs-check-circle");
        document.querySelector('.recuperacion_autenticacion__input-error').classList.remove("recuperacion_autenticacion__input-error-activo");
        campoValido = true;
    } else {
        // Código inválido
        $grupoAutenticacion.classList.add("recuperacion_autenticacion-incorrecto");
        $grupoAutenticacion.classList.remove("recuperacion_autenticacion-correcto");
        document.querySelector('.recuperacion_autenticacion__grupo-input i').classList.add("bxs-x-circle");
        document.querySelector('.recuperacion_autenticacion__grupo-input i').classList.remove("bxs-check-circle");
        document.querySelector('.recuperacion_autenticacion__input-error').classList.add("recuperacion_autenticacion__input-error-activo");
        campoValido = false;
    }
};

$codigoInput.addEventListener('keyup', validarCodigo);
$codigoInput.addEventListener('blur', validarCodigo);


$formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
  
    validarCodigo();
    
    if(campoValido) {
        // Enviar el formulario al servidor en lugar de redirigir
        $formulario.submit();
    } else {
        alert('Por favor, introduzca un código de recuperación válido de 6 dígitos.');
    }
});

// Cargar el email de la URL al campo oculto
window.addEventListener("DOMContentLoaded", () => {
    const email = new URLSearchParams(window.location.search).get("email");
    document.getElementById("email_oculto").value = email;
});


app.post('/recuperacion-autenticacion', async (req, res) => {
    const email = req.body.correo_recuperacion;

    const usuario = await db.usuarios.findOne({ where: { email } });
    if (!usuario) return res.status(404).send('Correo no registrado');

    const codigo = Math.floor(100000 + Math.random() * 900000);
    await db.codigos_recuperacion.create({ email, codigo });

    // Aquí deberías enviar el código por correo (Nodemailer, etc.)
    await enviarCorreo(email, `Tu código de recuperación es: ${codigo}`);

    res.redirect(`/proyecto_software1/pages/recuperacion/autenticacion.html?email=${email}`);
});

window.addEventListener("DOMContentLoaded", () => {
    const email = new URLSearchParams(window.location.search).get("email");
    document.getElementById("email_oculto").value = email;
});
