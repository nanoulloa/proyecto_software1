document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => document.getElementById(id).innerHTML = data)
            .catch(error => console.error(`Error cargando ${file}:`, error));
    }

    loadComponent("footer_placeholder", "/proyecto_software1/componentes/footer.html");
    loadComponent("header_placeholder", "/proyecto_software1/componentes/header.html");
});