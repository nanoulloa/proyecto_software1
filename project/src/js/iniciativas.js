document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('iniciativaForm');
    const titulo = document.getElementById('titulo');
    const descripcion = document.getElementById('descripcion');
    const categoria = document.getElementById('categoria');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validar título
        if (titulo.value.trim() === '') {
            titulo.classList.add('is-invalid');
            titulo.classList.remove('is-valid');
            isValid = false;
        } else {
            titulo.classList.remove('is-invalid');
            titulo.classList.add('is-valid');
        }

        // Validar descripción (mínimo 20 caracteres)
        if (descripcion.value.trim().length < 20) {
            descripcion.classList.add('is-invalid');
            descripcion.classList.remove('is-valid');
            isValid = false;
        } else {
            descripcion.classList.remove('is-invalid');
            descripcion.classList.add('is-valid');
        }

        // Validar categoría
        if (categoria.value === '') {
            categoria.classList.add('is-invalid');
            categoria.classList.remove('is-valid');
            isValid = false;
        } else {
            categoria.classList.remove('is-invalid');
            categoria.classList.add('is-valid');
        }

        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
});