//PASO 1 CREAR VARIABLES 

//--------GUARDAMOS HTML CON EL DOM
const $inputs = document.querySelectorAll('#formulario_usuario input');
const $formulario = document.getElementById('formulario_usuario');

// EXPRESIONES REGULARES 

const expresiones ={
    usuario:/^[a-zA-Z0-9\_\-]{4,16}$/, //SOLO ADMITE LETRAS MAYUSCULAS Y MINUSCULAS, GUION Y GUION BAJO Y NUMEROS, RANGO 4 CARACTERES MINIMO Y 16 MAXIMO
    password: /^.{4,12}$/, //ACEPTA TODO PERO UN MINIMO DE 4 Y MAXIMO 12
    correo:/^[a-zA-Z0-9\_]+@[a-zA-Z]+\.[a-zA-Z]+$/ , //VALIDAR LA ESTRUCTURA dato1@dato2.dato3  dato1=ACEPTA LETRAS MAYUSCULAS Y MINUSCULAS, NUMEROS Y GUION BAJO, dato2=ACEPTA SOLO LETRAS dato3=ACEPTA SOLO LETRAS
    telefono: /^\d{8,11}$/
}

//Objeto CAMPOS
const campos={
    usuario: false,
    nombre: false,
    password: false,
    correo:false,
    telefono:false
}

//PASO 3 REALIZAR ACCION
//e = <input type="password" class="formulario__input" name="password" id="password">
const validarFormulario = (e) =>{
    switch(e.target.name){//target se trae el valor del atributo que estamos consultando target.value ---- "sre"
        case "usuario":
            //           /^[a-zA-Z0-9\_\-]{4,16}$/
            validarCampo(expresiones.usuario, e.target, "usuario" );
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
    }
}


const validarCampo = (expresion,input,campo) =>{
    //ocupamos validar la expresion regular
    //visualizar las class que no existen todavia

    ///^[a-zA-ZÀ-ÿ\s]{3,40}$/.test("ste")--->true
    if(expresion.test(input.value)){//test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especifica
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("bxs-x-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("bxs-check-circle"); 
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo]=true;
    }else{
        //                       grupo__nombre
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("bxs-x-circle");
        document.querySelector(`#grupo__${campo} i`).classList.remove("bxs-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo]=false
    }

}


const validarPassword2 = () =>{
    let inputPassword1 = document.getElementById("password");
    let inputPassword2 = document.getElementById("password2");

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.add("bxs-x-circle");
        document.querySelector(`#grupo__password2 i`).classList.remove("bxs-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[password]=false;
    }else{
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.remove("bxs-x-circle");
        document.querySelector(`#grupo__password2 i`).classList.add("bxs-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[password]=true;
    }
}



//PASO 2 ESCUCHAR EL EVENTO

//INPUT= [5,6,8,1]
//CICLO ME DEVUELVE UN INDICE QUE AUMENTA
//input=1

$inputs.forEach((input)=>{
    //
    input.addEventListener("keyup",validarFormulario)//KEYUP EVENTO CUANDO PRESIONAMOS UNA TECLA
    input.addEventListener("blur",validarFormulario)//BLUR CUANDO QUITAMOS EL CURSOR/SELECCION
})

$formulario.addEventListener("submit",(e)=>{
    e.preventDefault();//Evita que se recargue la p+agina

    const $terminos = document.getElementById("terminos");
    if(campos.correo && campos.nombre && campos.password && campos.telefono && campos.usuario && $terminos.checked){
        document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");

        setTimeout(()=>{
            location.reload();
        },4000)

    }else{
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
})