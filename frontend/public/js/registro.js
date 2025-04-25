

//GUARDAMOS HTML CON EL DOC//
const $inputs = document.querySelectorAll('#formulario__registro input');
const $select = document.querySelectorAll('#formulario__registro select');
const $textareas = document.querySelectorAll('#formulario__registro textarea');
const $formulario = document.getElementById('formulario__registro');

// EXPRESIONES REGULARES

const expresiones ={
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9\_]+@[a-zA-Z]+\.[a-zA-Z]+$/,
    telefono: /^\d{8,11}$/,
    direccion: /^[a-zA-ZÀ-ÿ\s]{30,100}$/
}

//Objeto CAMPOS
const campos={
    usuraio: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false,
    direccion: false,
    canton: false,
    distrito: false,
}

const distritosPorCanton = {
    "Montes de oca": ["San Pedro", "Sabanilla", "Mercedes", "San Rafael"]
}

const actualizarDistritos = () => {
    const cantonSelect = document.getElementById('canton');
    const distritoSelect = document.getElementById('distrito');
    const cantonSeleccionado = cantonSelect.value;
    
    distritoSelect.innerHTML = '<option value="null"></option>';
    
    if (cantonSeleccionado !== "null") {
        const distritos = distritosPorCanton[cantonSeleccionado] || [];
        
        distritos.forEach(distrito => {
            const option = document.createElement('option');
            option.value = distrito;
            option.textContent = distrito;
            distritoSelect.appendChild(option);
        });
        
        validarSelect('canton');
    } else {
        invalidarSelect('canton');
    }
    
    invalidarSelect('distrito');
}

const validarSelect = (campo) => {
    const select = document.getElementById(campo);
    
    if (select.value !== "null") {
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("bxs-x-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("bxs-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__select-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
    } else {
        invalidarSelect(campo);
    }
}

const invalidarSelect = (campo) => {
    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.add("bxs-x-circle");
    document.querySelector(`#grupo__${campo} i`).classList.remove("bxs-check-circle");
    document.querySelector(`#grupo__${campo} .formulario__select-error`).classList.add("formulario__input-error-activo");
    campos[campo] = false;
}

const validarFormulario = (e) => {
    switch(e.target.name) { 
        case "usuario":
            validarCampo(expresiones.usuario, e.target, "usuario");
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
            break;
        case "password":
            validarCampo(expresiones.password, e.target, "password");
            validarPassword2();
            break;
        case "password2":
            validarPassword2();
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
            break;
            case "direccion":
            validarCampo(expresiones.direccion, e.target, "direccion");
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) { 
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
}

const validarPassword2 = () => {
    let inputPassword1 = document.getElementById("password");
    let inputPassword2 = document.getElementById("password2");

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.add("bxs-x-circle");
        document.querySelector(`#grupo__password2 i`).classList.remove("bxs-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.remove("bxs-x-circle");
        document.querySelector(`#grupo__password2 i`).classList.add("bxs-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo"); 
        campos['password'] = true;
    }
}

$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario); 
    input.addEventListener("blur", validarFormulario);
});

$textareas.forEach((textarea) => {
    textarea.addEventListener("keyup", validarFormulario);
    textarea.addEventListener("blur", validarFormulario);
});


document.getElementById('canton').addEventListener('change', () => {
    actualizarDistritos();
});

document.getElementById('distrito').addEventListener('change', () => {
    validarSelect('distrito');
});

$formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const $terminos = document.getElementById("terminos");
    
    validarSelect('canton');
    validarSelect('distrito');
    
    if(campos.nombre && campos.password && campos.correo && campos.telefono && 
       campos.canton && campos.distrito && $terminos.checked) {
        document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");

        setTimeout(() => {
            location.reload();
        }, 4000);
    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});

window.addEventListener('DOMContentLoaded', () => {
    
    const cantonSelect = document.getElementById('canton');
    const distritoSelect = document.getElementById('distrito');
    
    cantonSelect.value = "null";
    distritoSelect.value = "null";
});



// Obtener el formulario
const formulario = document.getElementById('formulario__registro');

formulario.addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const formData = new FormData(formulario); // Recoge los datos del formulario

    const data = {
        nombre: formData.get('nombre'),
        correo: formData.get('correo'),
        password: formData.get('password'),
        telefono: formData.get('telefono'),
        canton: formData.get('canton'),
        distrito: formData.get('distrito'),
        direccion: formData.get('direccion')
    };

    try {
        const response = await fetch('/registro_crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convierte los datos a JSON
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            // Redirige o realiza alguna otra acción
        } else {
            alert(result.message); // Si hay un error, muestra el mensaje
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el formulario.');
    }
});