document.addEventListener('DOMContentLoaded', function() {
    const informacionAreas = {
        'centroinformacion_palacio': {
            titulo: 'Centro información palacio municipal',
            encargados: [
                {
                    nombre: 'Marisol Aguilar',
                    puesto: 'Técnico Centro Información',
                    telefono: '2280-5589',
                    correo: 'maguilarh@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'centroinformacion_plantel': {
            titulo: 'Centro información plantel municipal',
            encargados: [
                {
                    nombre: 'Ana Badilla',
                    puesto: 'Técnico Centro Información',
                    telefono: '2280-5589',
                    correo: 'Abadillav@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'secretaria_concejo': {
            titulo: 'Secretaría del concejo',
            encargados: [
                {
                    nombre: 'Mauricio Salas',
                    puesto: 'Secretario del Concejo',
                    telefono: '2280-5589',
                    correo: 'msalasv@montesdeoca.go.cr'
                },
                {
                    nombre: 'Marbely Blandón',
                    puesto: 'Asistente',
                    telefono: '2280-5589',
                    correo: 'mblandonb@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'alcaldia': {
            titulo: 'Alcaldía',
            encargados: [
                {
                    nombre: 'Paula Montano Chavarría',
                    puesto: 'Administradora Despacho',
                    telefono: '2280-5589',
                    correo: 'pmontanoc@montesdeoca.go.cr'
                },
                {
                    nombre: 'Marco Morales Adanaque',
                    puesto: 'Técnico del despacho',
                    telefono: '2280-5589',
                    correo: 'alcaldia@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'centro_monitoreo': {
            titulo: 'Centro monitoreo',
            encargados: [
                {
                    nombre: 'Magno Chavarría',
                    puesto: 'Supervisor',
                    telefono: '2280-5589',
                    correo: 'mchavarriab@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'gestion_juridica': {
            titulo: 'Gestión jurídica',
            encargados: [
                {
                    nombre: 'Sionney Bolivar',
                    puesto: 'Abogada',
                    telefono: '2280-5589',
                    correo: 'sbolivarw@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'desarrollo_humano': {
            titulo: 'Desarrollo humano',
            encargados: [
                {
                    nombre: 'Willow Abel Hernádez',
                    puesto: 'Trabajador Social',
                    telefono: '2280-5589',
                    correo: 'whernandezs@montesdeoca.go.cr'
                },
                {
                    nombre: 'Gabriela Mata',
                    puesto: 'Promotora Social',
                    telefono: '2280-5589',
                    correo: 'promociónsocial@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'desarrollo_economico': {
            titulo: 'Desarrollo económico local',
            encargados: [
                {
                    nombre: 'Rochelle Vargas Castro',
                    puesto: 'Administradora Desarrollo Económico',
                    telefono: '2280-5589',
                    correo: 'rvargasc@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'bienes_inmuebles': {
            titulo: 'Bienes Inmuebles y valoraciones',
            encargados: [
                {
                    nombre: 'Emilio Barrantes',
                    puesto: 'Jefe de Bienes Inmuebles y Valoraciones',
                    telefono: '2280-5589 ext: 166',
                    correo: 'bienesinmuebles@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'estrategia_institucional': {
            titulo: 'Estrategia institucional',
            encargados: [
                {
                    nombre: 'Massiel Villanueva',
                    puesto: 'Técnico',
                    telefono: '2280-5589',
                    correo: 'mvillanuevai@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'comunicacion': {
            titulo: 'Comunicación',
            encargados: [
                {
                    nombre: 'Viviana Viales',
                    puesto: 'Técnico',
                    telefono: '2280-5589',
                    correo: 'vvialesv@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'auditoria': {
            titulo: 'Auditoria',
            encargados: [
                {
                    nombre: 'Mariela Sandí',
                    puesto: 'Técnico',
                    telefono: '2280-5589',
                    correo: 'msandiv@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'administracion': {
            titulo: 'Administración',
            encargados: [
                {
                    nombre: 'Ileana Sibaja',
                    puesto: 'Profesional',
                    telefono: '2280-5589',
                    correo: 'isibajam@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'tecnologias_informacion': {
            titulo: 'Tecnologías de la Información',
            encargados: [
                {
                    nombre: 'Jeffrey Solano',
                    puesto: 'Analista',
                    telefono: '2280-5589',
                    correo: 'jsolanor@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'proveeduria': {
            titulo: 'Proveeduría',
            encargados: [
                {
                    nombre: 'Guillermo Garro',
                    puesto: 'Gestor proveeduría',
                    telefono: '2280-5589',
                    correo: 'ggarrom@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'servicios_generales': {
            titulo: 'Serv. Generales',
            encargados: [
                {
                    nombre: 'Francisco Cruz',
                    puesto: 'Gestor',
                    telefono: '2280-5589',
                    correo: 'fcruzb@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'talento_humano': {
            titulo: 'Talento humano',
            encargados: [
                {
                    nombre: 'Lorena Martínez',
                    puesto: 'Técnico',
                    telefono: '2280-5589',
                    correo: 'lmartinezb@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'hacienda_municipal': {
            titulo: 'Hacienda municipal',
            encargados: [
                {
                    nombre: 'Pablo Guzmán',
                    puesto: 'Director',
                    telefono: '2280-5589',
                    correo: 'pguzmanm@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'licencias_comerciales': {
            titulo: 'Licencias comerciales',
            encargados: [
                {
                    nombre: 'Gabriela Pochet',
                    puesto: 'Técnico',
                    telefono: '2280-5589',
                    correo: 'gpochetb@montesdeoca.go.cr'
                },
                {
                    nombre: 'Melania Solano',
                    puesto: 'Técnico',
                    telefono: '2280-5589',
                    correo: 'ssolanoc@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'tesoreria': {
            titulo: 'Tesorería',
            encargados: [
                {
                    nombre: 'Alejandra Alvarado',
                    puesto: 'Administradora',
                    telefono: '2280-5589',
                    correo: 'aalvaradoq@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'contabilidad': {
            titulo: 'Contabilidad',
            encargados: [
                {
                    nombre: 'Francisco Arias',
                    puesto: 'Contador',
                    telefono: '2280-5589',
                    correo: 'fariasm@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'gestion_cobro': {
            titulo: 'Gestión de cobro',
            encargados: [
                {
                    nombre: 'Jorge Vega',
                    puesto: 'Técnico',
                    telefono: '2280-5589',
                    correo: 'jvegag@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'gestion_territorial': {
            titulo: 'Gestión territorial',
            encargados: [
                {
                    nombre: 'Harold Jiménez',
                    puesto: 'Inspector',
                    telefono: '2280-5589',
                    correo: 'hjimenezq@montesdeoca.go.cr'
                },
                {
                    nombre: 'Wendy Segura',
                    puesto: 'Administradora',
                    telefono: '2280-5589',
                    correo: 'wsegurar@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'infraestructura_publica': {
            titulo: 'Infraestructura pública',
            encargados: [
                {
                    nombre: 'Katerine Navarro',
                    puesto: 'Técnico',
                    telefono: '2280-5589',
                    correo: 'knavarrop@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'catastro': {
            titulo: 'Catastro',
            encargados: [
                {
                    nombre: 'Rafael Perez',
                    puesto: 'Gestor',
                    telefono: '2280-5589',
                    correo: 'rperezv@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'licencias_constructivas': {
            titulo: 'Licencias constructivas',
            encargados: [
                {
                    nombre: 'Allen Fernández',
                    puesto: 'Gestor',
                    telefono: '2280-5589',
                    correo: 'afernandezr@montesdeoca.go.cr'
                },
                {
                    nombre: 'Kattia Loría',
                    puesto: 'Administradora',
                    telefono: '2280-5589',
                    correo: 'klorias@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'inspeccion': {
            titulo: 'Inspección',
            encargados: [
                {
                    nombre: 'Alex Mena',
                    puesto: 'Administrador',
                    telefono: '2280-5589',
                    correo: 'amenav@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'cementerios': {
            titulo: 'Cementerios',
            encargados: [
                {
                    nombre: 'Xiomara Jimenez',
                    puesto: 'Técnico',
                    telefono: '2280-5589',
                    correo: 'xjimenezc@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'gestion_ambiental': {
            titulo: 'Gestión ambiental',
            encargados: [
                {
                    nombre: 'Roberth Vega',
                    puesto: 'Asistente',
                    telefono: '2280-5589',
                    correo: 'rvegar@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'limpieza_vias': {
            titulo: 'Limpieza de Vías',
            encargados: [
                {
                    nombre: 'Marla Sarmiento',
                    puesto: 'Asistente',
                    telefono: '2280-5589',
                    correo: 'msarmientob@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'recoleccion_residuos': {
            titulo: 'Recolección de residuos',
            encargados: [
                {
                    nombre: 'Karina Elizondo',
                    puesto: 'Administrador',
                    telefono: '2280-5589',
                    correo: 'kelizondos@montesdeoca.go.cr'
                }
            ],
            horario: 'Lunes a Viernes 8:00am a 4:00pm'
        },
        'parque_este': {
            titulo: 'Parque del este',
            encargados: [
                {
                    nombre: 'Viviana Icaza Martínez',
                    puesto: 'Administración Parque del Este',
                    telefono: '2280-5589',
                    correo: 'vicazam@montesdeoca.go.cr'
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
       