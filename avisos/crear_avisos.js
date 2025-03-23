
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("aviso-form");
    const tituloInput = document.getElementById("titulo");
    const contenidoInput = document.getElementById("contenido");
    const tituloIcon = document.getElementById("titulo-icon");
    const contenidoIcon = document.getElementById("contenido-icon");

    function validateInput(input, icon) {
        if (input.value.trim().length > 3) {
            icon.textContent = "✔️";
            icon.classList.remove("invalid");
            icon.classList.add("valid");
        } else {
            icon.textContent = "❌";
            icon.classList.remove("valid");
            icon.classList.add("invalid");
        }
        icon.style.display = "inline";
    }

    tituloInput.addEventListener("input", () => validateInput(tituloInput, tituloIcon));
    contenidoInput.addEventListener("input", () => validateInput(contenidoInput, contenidoIcon));

    form.addEventListener("submit", function (event) {
        validateInput(tituloInput, tituloIcon);
        validateInput(contenidoInput, contenidoIcon);

        if (tituloInput.value.trim().length <= 3 || contenidoInput.value.trim().length <= 3) {
            event.preventDefault(); // Evita que se envíe el formulario si hay errores
            alert("Por favor, completa los campos correctamente.");
        }
    });
});