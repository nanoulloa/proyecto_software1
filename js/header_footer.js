document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => document.getElementById(id).innerHTML = data)
            .catch(error => console.error(`Error cargando ${file}:`, error));
    }

    window.loadComponent = loadComponent; 

    let headerFile = localStorage.getItem("headerFile") || "/proyecto_software1/componentes/header.html";


    loadComponent("footer_placeholder", "/proyecto_software1/componentes/footer.html");
    loadComponent("header_placeholder", headerFile);
});


document.getElementById("btnRegistro").addEventListener("click", function() {
    let nuevoHeader = "/proyecto_software1/componentes/header_ingresado.html";

    // Guardar en LocalStorage
    localStorage.setItem("headerFile", nuevoHeader);

    // Cambiar el header inmediatamente en la página actual
    loadComponent("header_placeholder", nuevoHeader);
});

document.getElementById("logout_button").addEventListener("click", function() {
    let regresarHeader = "/proyecto_software1/componentes/header.html";

    // Guardar en LocalStorage
    localStorage.setItem("headerFile", regresarHeader);

    // Cambiar el header inmediatamente en la página actual
    loadComponent("header_placeholder", regresarHeader);
});
  
/*document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => document.getElementById(id).innerHTML = data)
            .then(() => setupLogoutButton()) // Asegura que el botón funcione después de cargar el header
            .catch(error => console.error(`Error cargando ${file}:`, error));
    }

    function setupLogoutButton() {
        const logoutButton = document.getElementById("logout_utton");
        if (logoutButton) {
            logoutButton.addEventListener("click", function () {
                localStorage.removeItem("userLoggedIn"); // Elimina sesión
                loadComponent("header_placeholder", "/proyecto_software1/componentes/header.html"); // Carga el header original
            });
        }
    }

    // Verifica si el usuario está logueado
    if (localStorage.getItem("userLoggedIn")) {
        loadComponent("header_placeholder", "/proyecto_software1/componentes/header_logged.html"); // Header con sesión iniciada
    } else {
        loadComponent("header_placeholder", "/proyecto_software1/componentes/header.html"); // Header normal
    }

    loadComponent("footer_placeholder", "/proyecto_software1/componentes/footer.html");
});*/

