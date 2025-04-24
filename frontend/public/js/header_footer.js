
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

    let headerFile = localStorage.getItem("headerFile") || "../componentes/header.html";

    // Cargar el footer sin callback
    loadComponent("footer_placeholder", "../componentes/footer.html");

    // Cargar el header y asignar los event listeners después de cargarlo
    loadComponent("header_placeholder", headerFile, function() {
        assignEventListeners(); // Llamar después de cargar el header
    });
});
/*
document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("header_placeholder");
    const isLoggedIn = sessionStorage.getItem("usuario_logueado"); // o usa una cookie

    fetch("/proyecto_software1/frontend/public/componentes/header_ingresado.html")
        .then(res => res.text())
        .then(data => {
            placeholder.innerHTML = data;

            if (isLoggedIn) {
                document.querySelector('.perfil_item').style.display = 'inline-block';
                document.querySelector('.logout_item').style.display = 'inline-block';
                document.querySelector('.login_link').style.display = 'none';
                document.querySelector('.register_link').style.display = 'none';
            }

            const logoutBtn = document.getElementById("logout_button");
            if (logoutBtn) {
                logoutBtn.addEventListener("click", e => {
                    e.preventDefault();
                    sessionStorage.removeItem("usuario_logueado");
                    window.location.href = "/proyecto_software1/Index.html";
                });
            }
        })
        .catch(err => {
            console.error("Error al cargar el header:", err);
        });
});*/
