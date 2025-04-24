document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/mostrar_noticias')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verifica la estructura de la respuesta
        const noticias = data;
        const container = document.getElementById('news_container');
        noticias.forEach(noticia => {
          const card = document.createElement('div');
          card.className = 'news_card';
          card.innerHTML = `
            <div class="news_image">
              <img src="../img/${noticia.imagen}" alt="${noticia.titulo}">
              <p class="noticias_fecha">${noticia.fecha_publicacion}</p>
            </div>
            <div class="news_content">
              <h3>${noticia.titulo}</h3>
              <p>${noticia.contenido}</p>
              <a href="#">Leer más</a>
            </div>
          `;
          container.appendChild(card);
        });
        
      })
      .then(noticias => {
        console.log(noticias); // Verifica que noticias es un arreglo
        const container = document.getElementById('news_container');
        noticias.forEach(noticia => {
          // ...
        });
      })
      .catch(error => {
        console.error('Error al cargar las noticias:', error);
      });
      
  });

  document.addEventListener('DOMContentLoaded', () => {
    const $inputs = document.querySelectorAll('#formulario__registro input');
    const $textareas = document.querySelectorAll('#formulario__registro textarea');
    const $formulario = document.getElementById('formulario__registro');
    
    // Expresiones regulares para validación
    const expresiones = {
        titulo: /^.{3,50}$/,  // Titulo debe tener entre 3 y 50 caracteres
        contenido: /^.{10,500}$/,  // Contenido debe tener entre 10 y 500 caracteres
        fecha_publicacion: /^\d{4}-\d{2}-\d{2}$/,  // Fecha debe ser en formato YYYY-MM-DD
        imagen: /^(?!\s*$).+$/,  // Imagen no puede estar vacía
    };
    
    // Objeto para verificar el estado de los campos
    const campos = {
        titulo: false,
        contenido: false,
        fecha_publicacion: false,
        imagen: false,
    };

    // Función para validar cada campo individualmente
    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
            document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
            document.querySelector(`#grupo__${campo} i`).classList.remove("bxs-x-circle");
            document.querySelector(`#grupo__${campo} i`).classList.add("bxs-check-circle");
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
            document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
            document.querySelector(`#grupo__${campo} i`).classList.add("bxs-x-circle");
            document.querySelector(`#grupo__${campo} i`).classList.remove("bxs-check-circle");
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
            campos[campo] = false;
        }
    };

    // Agregar eventos a cada campo de entrada
    $inputs.forEach(input => {
        input.addEventListener("keyup", (e) => {
            switch (e.target.name) {
                case "titulo":
                    validarCampo(expresiones.titulo, e.target, "titulo");
                    break;
                case "fecha_publicacion":
                    validarCampo(expresiones.fecha_publicacion, e.target, "fecha_publicacion");
                    break;
                case "imagen":
                    validarCampo(expresiones.imagen, e.target, "imagen");
                    break;
            }
        });
        
        input.addEventListener("blur", (e) => {
            switch (e.target.name) {
                case "titulo":
                    validarCampo(expresiones.titulo, e.target, "titulo");
                    break;
                case "fecha_publicacion":
                    validarCampo(expresiones.fecha_publicacion, e.target, "fecha_publicacion");
                    break;
                case "imagen":
                    validarCampo(expresiones.imagen, e.target, "imagen");
                    break;
            }
        });
    });

    // Agregar eventos a los campos textarea
    $textareas.forEach(textarea => {
        textarea.addEventListener("keyup", (e) => {
            if (e.target.name === "contenido") {
                validarCampo(expresiones.contenido, e.target, "contenido");
            }
        });
        
        textarea.addEventListener("blur", (e) => {
            if (e.target.name === "contenido") {
                validarCampo(expresiones.contenido, e.target, "contenido");
            }
        });
    });

    // Validación al enviar el formulario
    $formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (campos.titulo && campos.contenido && campos.fecha_publicacion && campos.imagen) {
            document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
            document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
            
            setTimeout(() => {
                $formulario.submit();  // Solo se envía si todo está validado correctamente
            }, 4000);
        } else {
            document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
        }
    });
});