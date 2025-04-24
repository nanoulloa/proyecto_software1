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
        // Intentar forzar la redirección de diferentes maneras
        try {
            // Método 1: Usar setTimeout para dar tiempo a que se complete cualquier otra operación
            setTimeout(() => {
                window.location.href = '/recuperacion-nuevacontrasena';
            }, 100);
            
            // Método alternativo si el anterior falla
            // window.location.replace('/recuperacion-nuevacontrasena');
            
            console.log('Redirección iniciada a /recuperacion-nuevacontrasena');
        } catch (error) {
            console.error('Error al redirigir:', error);
            // Como último recurso, intentar con una redirección tradicional
            window.location = '/recuperacion-nuevacontrasena';
        }
    } else {
        alert('Por favor, introduzca un código de recuperación válido de 6 dígitos.');
    }
});

// Agregar evento también al botón para asegurar que funcione
document.querySelector('.btn-continuar_autenticacion').addEventListener('click', function(e) {
    e.preventDefault();
    
    validarCodigo();
    
    if(campoValido) {
        // Intentar forzar la redirección
        setTimeout(() => {
            window.location.href = '/recuperacion-nuevacontrasena';
        }, 100);
        console.log('Redirección iniciada desde botón a /recuperacion-nuevacontrasena');
    } else {
        alert('Por favor, introduzca un código de recuperación válido de 6 dígitos.');
    }
});

