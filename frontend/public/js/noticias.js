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

  