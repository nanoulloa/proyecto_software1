async function obtenerPerfilUsuario() {
    try {
      const res = await fetch('/mostrar-perfil-usuario'); // Ruta para obtener el perfil
      if (res.ok) {
        const perfil = await res.json();
        
        // Llenar los campos del perfil con la data obtenida
        document.getElementById("valor_usuario").innerText = perfil.nombre;
        document.getElementById("valor_telefono").innerText = perfil.telefono || 'No disponible';
        document.getElementById("valor_correo").innerText = perfil.correo;
        document.getElementById("valor_direccion").innerText = perfil.direccion || 'No disponible';
        document.getElementById("valor_distrito").innerText = perfil.distrito || 'No disponible';
      } else {
        console.error("Error al obtener el perfil del usuario");
        // Aquí puedes manejar el caso de error
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }
  
  // Llamamos a la función al cargar la página
  window.onload = obtenerPerfilUsuario;