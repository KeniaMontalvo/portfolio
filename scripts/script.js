/*VALIDACIÓN*/

const form = document.getElementById("form");
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const asunto = document.getElementById("topic");
const mensaje = document.getElementById("mensaje");
const botonEnviar = document.getElementById("enviar-btn");

const advertenciaNombre = document.getElementById("advertenciaNombre");
const advertenciaEmail = document.getElementById("advertenciaEmail");
const advertenciaAsunto = document.getElementById("advertenciaAsunto");
const advertenciaMensaje = document.getElementById("advertenciaMensaje");
const advertenciaGeneral = document.getElementById("advertenciaGeneral");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Restablecer los mensajes de advertencia
    resetearMensajes();

    let hayErrores = false;

    if (nombre.value.length === 0) {
        mostrarAdvertencia(advertenciaNombre, "Ingrese un nombre");
        hayErrores = true;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo.value)) {
        mostrarAdvertencia(advertenciaEmail, "El correo electrónico no es válido");
        hayErrores = true;
    }
    if (asunto.value.length === 0) {
        mostrarAdvertencia(advertenciaAsunto, "Ingrese un asunto");
        hayErrores = true;
    }
    if (mensaje.value.length === 0) {
        mostrarAdvertencia(advertenciaMensaje, "Ingrese un mensaje");
        hayErrores = true;
    }
    if (!hayErrores) {
        advertenciaGeneral.innerHTML = "¡Tu mensaje se ha enviado!";
    }
});

function resetearMensajes() {
    advertenciaNombre.innerHTML = "";
    advertenciaEmail.innerHTML = "";
    advertenciaAsunto.innerHTML = "";
    advertenciaMensaje.innerHTML = "";
    advertenciaGeneral.innerHTML = "";
}

function mostrarAdvertencia(elemento, mensaje) {
    elemento.innerHTML = mensaje;
}

/*FORMULARIO DE CONTACTO*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbyqigOZ4f-fo8xCVoiRQ8dRXSM94S4t0MW0061fA8DOa6YY6_Lp2bl5UGcqkrakjeZUcQ/exec'
const formulario = document.forms['submit-form']

formulario.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(formulario)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})