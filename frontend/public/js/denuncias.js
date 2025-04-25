document.addEventListener('DOMContentLoaded', () => {
    fetch('/mostrar_Denuncias') // Esta es tu ruta que retorna el JSON
      .then(res => res.json())
      .then(data => {
        const contenedor = document.getElementById('lista_denuncias');
  
        if (!data || data.length === 0) {
          contenedor.innerHTML = "<p>No hay denuncias registradas.</p>";
          return;
        }
  
        data.forEach(denuncia => {
          const div = document.createElement('div');
          div.classList.add('denuncia');
  
          div.innerHTML = `
            <h3>📅 ${new Date(denuncia.fecha).toLocaleDateString()}</h3>
            <p>${denuncia.comentario}</p>
            ${denuncia.imagen ? `<img src="/img${denuncia.imagen}" alt="Foto de denuncia">` : ''}
          `;
  
          contenedor.appendChild(div);
        });
      })
      .catch(error => {
        console.error("Error al cargar denuncias:", error);
      });
  });