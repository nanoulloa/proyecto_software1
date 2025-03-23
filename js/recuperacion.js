const $correoInput = document.getElementById('correo_recuperacion');
const $formulario = document.querySelector('.formulario_recuperacion form');
const $grupoRecuperacion = document.getElementById('grupo_recuperacion');

const expresionCorreo = /^[a-zA-Z0-9\_]+@[a-zA-Z]+\.[a-zA-Z]+$/;

let campoValido = false;

const validarCorreo = () => {
    const valor = $correoInput.value.trim();
    
    if(expresionCorreo.test(valor)) {
        
        $grupoRecuperacion.classList.remove("recuperacion-incorrecto");
        $grupoRecuperacion.classList.add("recuperacion-correcto");
        document.querySelector('.recuperacion__grupo-input i').classList.remove("bxs-x-circle");
        document.querySelector('.recuperacion__grupo-input i').classList.add("bxs-check-circle");
        document.querySelector('.recuperacion__input-error').classList.remove("recuperacion__input-error-activo");
        campoValido = true;
    } else {
        
        $grupoRecuperacion.classList.add("recuperacion-incorrecto");
        $grupoRecuperacion.classList.remove("recuperacion-correcto");
        document.querySelector('.recuperacion__grupo-input i').classList.add("bxs-x-circle");
        document.querySelector('.recuperacion__grupo-input i').classList.remove("bxs-check-circle");
        document.querySelector('.recuperacion__input-error').classList.add("recuperacion__input-error-activo");
        campoValido = false;
    }
};

$correoInput.addEventListener('keyup', validarCorreo);
$correoInput.addEventListener('blur', validarCorreo);

$formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
  
    validarCorreo();
    
    if(campoValido) {
 
        window.location.href = "autenticacion.html";

    } else {
        
        alert('Por favor, introduzca un correo electrónico válido.');
    }
});