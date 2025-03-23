document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => document.getElementById(id).innerHTML = data)
            .catch(error => console.error(`Error cargando ${file}:`, error));
    }

    loadComponent("header_placeholder", "../header_footer/header.html");
    loadComponent("footer_placeholder", "../header_footer/footer.html");
});