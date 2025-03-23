const $inputs = document.querySelectorAll('#formulario__registro input');
const $select = document.querySelectorAll('#formulario__registro select');
const $formulario = document.getElementById('formulario__registro');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9\_]+@[a-zA-Z]+\.[a-zA-Z]+$/,
    telefono: /^\d{8,11}$/,
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false,
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
    }
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

    if (inputPassword2.value === "") {
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.add("bxs-x-circle");
        document.querySelector(`#grupo__password2 i`).classList.remove("bxs-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos['password'] = false;
        return; 
    }
    
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

document.getElementById('canton').addEventListener('change', () => {
    actualizarDistritos();
});

const resetFormStyles = () => {
    
    $inputs.forEach((input) => {
        const campo = input.name;
        const grupo = document.getElementById(`grupo__${campo}`);
        if (grupo) {
            grupo.classList.remove("formulario__grupo-correcto");
            grupo.classList.remove("formulario__grupo-incorrecto");
            const icon = grupo.querySelector('i');
            if (icon) {
                icon.classList.remove("bxs-check-circle");
                icon.classList.remove("bxs-x-circle");
            }
            const error = grupo.querySelector('.formulario__input-error');
            if (error) {
                error.classList.remove("formulario__input-error-activo");
            }
        }
    });
    
    $select.forEach((select) => {
        const campo = select.id;
        const grupo = document.getElementById(`grupo__${campo}`);
        if (grupo) {
            grupo.classList.remove("formulario__grupo-correcto");
            grupo.classList.remove("formulario__grupo-incorrecto");
            const icon = grupo.querySelector('i');
            if (icon) {
                icon.classList.remove("bxs-check-circle");
                icon.classList.remove("bxs-x-circle");
            }
            const error = grupo.querySelector('.formulario__select-error');
            if (error) {
                error.classList.remove("formulario__input-error-activo");
            }
        }
    });
}

$formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 
  
    $inputs.forEach((input) => {
        switch(input.name) { 
            case "usuario":
                validarCampo(expresiones.usuario, input, "usuario");
                break;
            case "nombre":
                validarCampo(expresiones.nombre, input, "nombre");
                break;
            case "password":
                validarCampo(expresiones.password, input, "password");
                break;
            case "password2":
                validarPassword2();
                break;
            case "correo":
                validarCampo(expresiones.correo, input, "correo");
                break;
            case "telefono":
                validarCampo(expresiones.telefono, input, "telefono");
                break;
        }
    });

    validarSelect('canton');
    validarSelect('distrito');

    const $terminos = document.getElementById("terminos");
    
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
    
    resetFormStyles();
});