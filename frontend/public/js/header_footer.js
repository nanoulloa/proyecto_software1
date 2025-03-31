
/*
document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => document.getElementById(id).innerHTML = data)
            .catch(error => console.error(`Error cargando ${file}:`, error));
    }

    window.loadComponent = loadComponent; 

    let headerFile = localStorage.getItem("headerFile") || "componentes/header.html";


    loadComponent("footer_placeholder", "componentes/footer.html");
    loadComponent("header_placeholder", headerFile);
});


document.getElementById("btnRegistro").addEventListener("click", function() {
    let nuevoHeader = "componentes/header_ingresado.html";

    // Guardar en LocalStorage
    localStorage.setItem("headerFile", nuevoHeader);

    // Cambiar el header inmediatamente en la página actual
    loadComponent("header_placeholder", nuevoHeader);
});

document.getElementById("logout_button").addEventListener("click", function() {
    let regresarHeader = "componentes/header.html";

    // Guardar en LocalStorage
    localStorage.setItem("headerFile", regresarHeader);

    // Cambiar el header inmediatamente en la página actual
    loadComponent("header_placeholder", regresarHeader);
}); */
  
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
                loadComponent("header_placeholder", "componentes/header.html"); // Carga el header original
            });
        }
    }

    // Verifica si el usuario está logueado
    if (localStorage.getItem("userLoggedIn")) {
        loadComponent("header_placeholder", "componentes/header_logged.html"); // Header con sesión iniciada
    } else {
        loadComponent("header_placeholder", "componentes/header.html"); // Header normal
    }

    loadComponent("footer_placeholder", "componentes/footer.html");
});*/


document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file, callback) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
                if (callback) callback(); // Ejecuta un callback después de cargar el componente
            })
            .catch(error => console.error(`Error cargando ${file}:`, error));
    }

    window.loadComponent = loadComponent; 

    let headerFile = localStorage.getItem("headerFile") || "componentes/header.html";

    // Cargar el footer sin callback
    loadComponent("footer_placeholder", "/proyecto_software1/componentes/footer.html");

    // Cargar el header y asignar los event listeners después de cargarlo
    loadComponent("header_placeholder", headerFile, function() {
        assignEventListeners(); // Llamar después de cargar el header
    });
});

function assignEventListeners() {
    let btnRegistro = document.getElementById("btnRegistro");
    let logoutButton = document.getElementById("logout_button");

    if (btnRegistro) {
        btnRegistro.addEventListener("click", function() {
            let nuevoHeader = "componentes/header_ingresado.html";
            localStorage.setItem("headerFile", nuevoHeader);
            loadComponent("header_placeholder", nuevoHeader, assignEventListeners);
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            let regresarHeader = "componentes/header.html";
            localStorage.setItem("headerFile", regresarHeader);
            loadComponent("header_placeholder", regresarHeader, assignEventListeners);
        });
    }
}
