fetch('/admin/usuarios')
  .then(res => {
    if (!res.ok) throw new Error('Acceso no autorizado');
    return res.json();
  })
  .then(usuarios => {
    const tabla = document.querySelector("#tabla-usuarios tbody");
    usuarios.forEach(u => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${u.nombre}</td>
        <td>${u.correo}</td>
        <td>${u.rol}</td>
        <td>${u.distrito}</td>
      `;
      tabla.appendChild(fila);
    });
  })
  .catch(err => {
    console.error(err);
    alert("Error al cargar usuarios");
  });
