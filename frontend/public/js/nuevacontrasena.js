document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');
    const contrasena1 = document.getElementById('contrasena_nueva');
    const contrasena2 = document.querySelectorAll('input[name="contrasena_nueva"]')[1];
    const iconosError = document.querySelectorAll('.nueva_contrasena.bx.bxs-x-circle');
    const mensajesError = document.querySelectorAll('.nueva_contrasena__input-error');
    const botonSubmit = document.querySelector('.btn-continuar_cotrasena');
    const enlaceRedireccion = botonSubmit.querySelector('a');
    const contenedorFormulario = document.querySelector('.formulario_nueva_contrasena');
    
    // Expresión regular para validar contraseña (4 a 12 dígitos)
    const expresiones = {
        contrasena: /^.{4,12}$/
    };
    
    // Objeto para verificar el estado de los campos
    const campos = {
        contrasena1: false,
        contrasena2: false
    };
    
    // Función para validar el primer campo de contraseña
    const validarContrasena1 = () => {
        if(expresiones.contrasena.test(contrasena1.value)) {
            // Contraseña válida
            contrasena1.classList.remove('error');
            iconosError[0].classList.remove('bxs-x-circle');
            iconosError[0].classList.add('bxs-check-circle');
            iconosError[0].style.color = 'green';
            iconosError[0].style.opacity = '1';
            mensajesError[0].style.display = 'none';
            campos.contrasena1 = true;
        } else {
            // Contraseña inválida
            contrasena1.classList.add('error');
            iconosError[0].classList.remove('bxs-check-circle');
            iconosError[0].classList.add('bxs-x-circle');
            iconosError[0].style.color = 'red';
            iconosError[0].style.opacity = '1';
            mensajesError[0].style.display = 'block';
            campos.contrasena1 = false;
            
            // Si la primera contraseña es inválida, automáticamente la segunda también lo es
            contrasena2.classList.add('error');
            iconosError[1].classList.remove('bxs-check-circle');
            iconosError[1].classList.add('bxs-x-circle');
            iconosError[1].style.color = 'red';
            iconosError[1].style.opacity = '1';
            mensajesError[1].style.display = 'block';
            campos.contrasena2 = false;
        }
    };
    
    // Función para validar que ambas contraseñas coincidan
    const validarContrasena2 = () => {
        // Si la primera contraseña es inválida, no validamos la segunda (ya está marcada como inválida)
        if (!campos.contrasena1) {
            contrasena2.classList.add('error');
            iconosError[1].classList.remove('bxs-check-circle');
            iconosError[1].classList.add('bxs-x-circle');
            iconosError[1].style.color = 'red';
            iconosError[1].style.opacity = '1';
            mensajesError[1].style.display = 'block';
            campos.contrasena2 = false;
            return;
        }
        
        if(contrasena1.value === contrasena2.value && contrasena2.value !== '') {
            // Contraseñas coinciden
            contrasena2.classList.remove('error');
            iconosError[1].classList.remove('bxs-x-circle');
            iconosError[1].classList.add('bxs-check-circle');
            iconosError[1].style.color = 'green';
            iconosError[1].style.opacity = '1';
            mensajesError[1].style.display = 'none';
            campos.contrasena2 = true;
        } else if(contrasena2.value !== '') {
            // Contraseñas no coinciden
            contrasena2.classList.add('error');
            iconosError[1].classList.remove('bxs-check-circle');
            iconosError[1].classList.add('bxs-x-circle');
            iconosError[1].style.color = 'red';
            iconosError[1].style.opacity = '1';
            mensajesError[1].style.display = 'block';
            campos.contrasena2 = false;
        } else {
            // Campo vacío
            contrasena2.classList.add('error');
            iconosError[1].classList.remove('bxs-check-circle');
            iconosError[1].classList.add('bxs-x-circle');
            iconosError[1].style.color = 'red';
            iconosError[1].style.opacity = '1';
            mensajesError[1].style.display = 'block';
            campos.contrasena2 = false;
        }
    };
    
    // Asegurarse de que los iconos de error sean visibles pero inicialmente neutros
    iconosError.forEach(icono => {
        // Mantener los iconos visibles pero en estado neutral al inicio
        icono.style.opacity = '0';
    });
    
    // Ocultar los mensajes de error inicialmente
    mensajesError.forEach(mensaje => {
        mensaje.style.display = 'none';
    });
    
    // Prevenir que el enlace de redirección funcione por defecto
    if (enlaceRedireccion) {
        enlaceRedireccion.addEventListener('click', function(e) {
            e.preventDefault();
            // Ejecutar la misma validación que el submit
            validarFormulario();
        });
    }
    
    // Agregar toggle de visibilidad de contraseña
    const agregarTogglePassword = () => {
        const gruposInput = document.querySelectorAll('.nueva_contrasena__grupo-input');
        
        gruposInput.forEach((grupo, index) => {
            const input = grupo.querySelector('input');
            
            // Crear icono de ojo
            const iconoOjo = document.createElement('i');
            iconoOjo.className = 'bx bxs-hide';
            iconoOjo.style.position = 'absolute';
            iconoOjo.style.right = '30px';
            iconoOjo.style.top = '50%';
            iconoOjo.style.transform = 'translateY(-50%)';
            iconoOjo.style.cursor = 'pointer';
            iconoOjo.style.zIndex = '10';
            
            grupo.style.position = 'relative';
            grupo.appendChild(iconoOjo);
            
            // Agregar evento toggle
            iconoOjo.addEventListener('click', () => {
                if (input.type === 'password') {
                    input.type = 'text';
                    iconoOjo.classList.remove('bxs-hide');
                    iconoOjo.classList.add('bxs-show');
                } else {
                    input.type = 'password';
                    iconoOjo.classList.add('bxs-hide');
                    iconoOjo.classList.remove('bxs-show');
                }
            });
        });
    };
    
    // Inicializar toggle de contraseña
    agregarTogglePassword();
    
    // Función centralizada para validar el formulario
    const validarFormulario = () => {
        // Validar campos
        validarContrasena1();
        validarContrasena2();
        
        // Remover mensaje de error anterior si existe
        const errorAnterior = document.querySelector('.error-general');
        if (errorAnterior) {
            errorAnterior.remove();
        }
        
        // Si ambos campos son válidos, permitir enviar formulario
        if(campos.contrasena1 && campos.contrasena2) {
            // Formulario válido, proceder con el envío
            console.log('Formulario validado correctamente');
            return true;
        } else {
            // Formulario inválido, mostrar mensaje de error general
            console.log('Error en el formulario - No se puede guardar ni iniciar sesión');
            
            // Mostrar mensaje de error general ANTES del footer
            const errorGeneral = document.createElement('p');
            errorGeneral.textContent = 'No se puede guardar ni iniciar sesión. Por favor verifica que las contraseñas cumplan con los requisitos.';
            errorGeneral.style.color = 'red';
            errorGeneral.style.textAlign = 'center';
            errorGeneral.style.marginTop = '10px';
            errorGeneral.style.fontWeight = 'bold';
            errorGeneral.className = 'error-general';
            
            // Insertar el mensaje antes del botón de continuar
            contenedorFormulario.insertBefore(errorGeneral, botonSubmit);
            
            // Resaltar visualmente los campos con error
            if (!campos.contrasena1) {
                contrasena1.style.borderColor = 'red';
                contrasena1.style.boxShadow = '0 0 5px rgba(255, 0, 0, 0.5)';
            } else {
                contrasena1.style.borderColor = '';
                contrasena1.style.boxShadow = '';
            }
            
            if (!campos.contrasena2) {
                contrasena2.style.borderColor = 'red';
                contrasena2.style.boxShadow = '0 0 5px rgba(255, 0, 0, 0.5)';
            } else {
                contrasena2.style.borderColor = '';
                contrasena2.style.boxShadow = '';
            }
            
            return false;
        }
    };
    
    // Validar formulario solo al enviar
    formulario.addEventListener('submit', function(e) {
        // Detener el envío del formulario inicialmente
        e.preventDefault();
        
        // Usar la función centralizada de validación
        if (validarFormulario()) {
            // Establecer la acción del formulario a /login
            formulario.setAttribute('action', '/login');
            // Si la validación es exitosa, permitir el envío del formulario
            formulario.submit();
        }
    });
    
    // También manejar el click directo en el botón
    botonSubmit.addEventListener('click', function(e) {
        // Prevenir comportamiento predeterminado
        e.preventDefault();
        
        // Usar la misma función de validación
        if (validarFormulario()) {
            // Si la validación es exitosa, permitir el envío
            if (enlaceRedireccion && enlaceRedireccion.getAttribute('href') !== '#') {
                window.location.href = enlaceRedireccion.getAttribute('href');
            } else {
                formulario.submit();
            }
        }
    });

    app.post('/recuperacion-nuevacontrasena-verificacion', async (req, res) => {
        const { numero_recuperacion_autenticacion, email } = req.body;
    
        const codigoGuardado = await db.codigos_recuperacion.findOne({
            where: { email, codigo: numero_recuperacion_autenticacion }
        });
    
        if (!codigoGuardado) {
            return res.status(400).send('Código incorrecto o expirado');
        }
    
        // Redirige al form para cambiar la contraseña con el email en la URL
        res.redirect(`/proyecto_software1/pages/recuperacion/nuevacontrasena.html?email=${email}`);
    });

    window.addEventListener("DOMContentLoaded", () => {
        const email = new URLSearchParams(window.location.search).get("email");
        document.getElementById("email_oculto").value = email;
    });
});