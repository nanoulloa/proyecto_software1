
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
                <h2>${aviso.titulo}</h2>
                <p>${aviso.contenido}</p>
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









