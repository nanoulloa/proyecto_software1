console.log('Iniciativas.js - Inicio de carga');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado completamente');
    
    const form = document.getElementById('iniciativaForm');
    console.log('Formulario encontrado:', form);
    
    if (!form) {
        console.error('No se pudo encontrar el formulario');
        return;
    }

    form.addEventListener('submit', function(e) {
        console.log('Formulario enviado');
        e.preventDefault();
        
        const titulo = document.getElementById('titulo');
        const descripcion = document.getElementById('descripcion');
        const categoria = document.getElementById('categoria');
        let isValid = true;

        // Validar título
        if (titulo.value.trim() === '') {
            mostrarError(titulo, 'El título es requerido');
            isValid = false;
        } else if (titulo.value.length < 5) {
            mostrarError(titulo, 'El título debe tener al menos 5 caracteres');
            isValid = false;
        } else {
            limpiarError(titulo);
        }

        // Validar descripción
        if (descripcion.value.trim() === '') {
            mostrarError(descripcion, 'La descripción es requerida');
            isValid = false;
        } else if (descripcion.value.length < 20) {
            mostrarError(descripcion, 'La descripción debe tener al menos 20 caracteres');
            isValid = false;
        } else {
            limpiarError(descripcion);
        }

        // Validar categoría
        if (categoria.value === '') {
            mostrarError(categoria, 'Debe seleccionar una categoría');
            isValid = false;
        } else {
            limpiarError(categoria);
        }

        if (isValid) {
            console.log('Formulario válido, procediendo con el envío...');
        }
    });
});

function mostrarError(elemento, mensaje) {
    limpiarError(elemento);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-mensaje';
    errorDiv.textContent = mensaje;
    elemento.parentElement.appendChild(errorDiv);
    elemento.classList.add('error');
}

function limpiarError(elemento) {
    const errorPrevio = elemento.parentElement.querySelector('.error-mensaje');
    if (errorPrevio) {
        errorPrevio.remove();
    }
    elemento.classList.remove('error');
}
