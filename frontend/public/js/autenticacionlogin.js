const $codigoInput = document.getElementById('numero_autenticacion');
const $formulario = document.querySelector('.formulario_autenticacion form');
const $grupoAutenticacion = document.getElementById('grupo_autenticacion');

// Expresión regular para verificar que sea un número de 6 dígitos (ajusta según tus necesidades)
const expresionCodigo = /^\d{6}$/;

let campoValido = false;

const validarCodigo = () => {
    const valor = $codigoInput.value.trim();
    
    if(expresionCodigo.test(valor)) {
        // Código válido
        $grupoAutenticacion.classList.remove("autenticacion-incorrecto");
        $grupoAutenticacion.classList.add("autenticacion-correcto");
        document.querySelector('.autenticacion__grupo-input i').classList.remove("bxs-x-circle");
        document.querySelector('.autenticacion__grupo-input i').classList.add("bxs-check-circle");
        document.querySelector('.autenticacion__input-error').classList.remove("autenticacion__input-error-activo");
        campoValido = true;
    } else {
        // Código inválido
        $grupoAutenticacion.classList.add("autenticacion-incorrecto");
        $grupoAutenticacion.classList.remove("autenticacion-correcto");
        document.querySelector('.autenticacion__grupo-input i').classList.add("bxs-x-circle");
        document.querySelector('.autenticacion__grupo-input i').classList.remove("bxs-check-circle");
        document.querySelector('.autenticacion__input-error').classList.add("autenticacion__input-error-activo");
        campoValido = false;
    }
};

$codigoInput.addEventListener('keyup', validarCodigo);
$codigoInput.addEventListener('blur', validarCodigo);


$formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
  
    validarCodigo();
    
    if(campoValido) {
        // Si el código es válido
        alert('Código de verificación correcto. Redirigiendo...');
        
    } else {
        // Si el código no es válido
        alert('Por favor, introduzca un código de verificación válido de 6 dígitos.');
    }
});