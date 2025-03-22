
function validarFormulario(event) {
    event.preventDefault();
    let titulo = document.getElementById("titulo").value.trim();
    let contenido = document.getElementById("contenido").value.trim();
    
    if (titulo === "") {
        alert("El título no puede estar vacío.");
        return;
    }
    if (contenido.length < 10) {
        alert("El contenido debe tener al menos 10 caracteres.");
        return;
    }
    alert("Aviso creado con éxito!");
    document.querySelector(".formulario").submit();
}
