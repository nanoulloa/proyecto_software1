document.addEventListener('DOMContentLoaded', function() {
    const informacionAreas = {
        'gestiónTerritorial': {
            titulo: 'Gestión territorial',
            encargados: [
                {
                    nombre: 'Harold Jiménez',
                    puesto: 'Inspector',
                    telefono: '***************',        
                    correo: 'hjimenezq@montesdeoca.go.cr'
                },
                {
                    nombre: 'Wendy Segura',
                    puesto: 'Administradora',
                    telefono: '***************',
                    correo: 'wsegurar@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'alcaldia': {
            titulo: 'Alcadia',
            encargados: [
                {
                    nombre: 'Magno Chavarría',
                    puesto: 'Supervisor',
                    telefono: '***************',        
                    correo: 'mchavarriab@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'departamentoNuevo': {
            titulo: 'departamento',
            encargados: [
                {
                    nombre: '',
                    puesto: '',
                    telefono: '',        
                    correo: ''
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        }
    };

    function mostrarInformacion(idArea) {
        const info = informacionAreas[idArea];
        if (!info) return;

        const contenedor = document.getElementById('contenedor-detalles');
        if (!contenedor) return;

        let contenidoHTML = `
            <div class="tarjeta-informacion">
                <h3>${info.titulo}</h3>`;

        if (info.encargados) {
            info.encargados.forEach(encargado => {
                contenidoHTML += `
                    <div class="encargado">
                        <p class="detalle-informacion">Encargado: ${encargado.nombre}</p>
                        <p class="detalle-informacion">Puesto: ${encargado.puesto}</p>
                        <p class="detalle-informacion">Teléfono: ${encargado.telefono}</p>
                        <p class="detalle-informacion">Correo: ${encargado.correo}</p>
                    </div>`;
            });
        } 
        contenidoHTML += `
                <p class="detalle-informacion">Horario: ${info.horario}</p>
            </div>`;

        contenedor.innerHTML = contenidoHTML;
    }

    document.querySelectorAll('.area-departamento').forEach(area => {
        area.addEventListener('click', function() {
            const idArea = this.getAttribute('data-area');
            
            document.querySelectorAll('.area-departamento').forEach(a => 
                a.classList.remove('activo'));
            
            this.classList.add('activo');
            
            mostrarInformacion(idArea);
        });
    });
});
