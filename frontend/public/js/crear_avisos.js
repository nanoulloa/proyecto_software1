
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


document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/mostrar_avisos')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verifica la estructura de la respuesta
        const avisos = data;
        const container = document.getElementById('container_avisos');
        avisos.forEach(aviso => {
          const card = document.createElement('div');
          card.className = 'aviso';
          card.innerHTML = `
             <div class="aviso">
                <h2>${aviso.titulo}</h2>
                <p>${aviso.contenido}</p>
            </div>
          `;
          container.appendChild(card);
        });
        
      })
      .then(avisos => {
        console.log(avisos); // Verifica que noticias es un arreglo
        const container = document.getElementById('news_container');
        avisos.forEach(aviso => {
          // ...
        });
      })
      .catch(error => {
        console.error('Error al cargar las noticias:', error);
      });
      
  });






