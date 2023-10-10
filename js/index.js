//Let = Variable
// Buscar el boton mediante su id
// Para enviar los datos a la BD
let buttonEnviar = document.getElementById('btn-enviar-datos');

//Alerta al presionar el boton de enviar 
buttonEnviar.addEventListener('click', function () {
    //alert('Mensaje de alerta enviar');

    //Definicion de una variable para buscar el campo nombre
    let inputNombre = document.getElementById('input-nombre');

    //Definicion de una variable para buscar el campo correo 
    let inputCorreo = document.getElementById('input-correo');

    //Definicion  de una variable para buscar mensaje de error
    let pMensajeError = document.getElementById('p-mensaje-error')

    //Definicion  de una variable para buscar mensaje de confirmacion
    let pMensajeConfirmacion = document.getElementById('p-mensaje-confirmacion')

    //Validar si el campo tiene nombre (caso de error)
    if (inputNombre.value == ""){
        //alert("Error: El nombre esta vacio.");
        pMensajeError.innerHTML = "Error: El campo nombre esta vacio."
    }

    //Validar si el campo tiene correo
    else if (inputCorreo.value == ""){
        //alert("Error: El correo esta vacio.");
        pMensajeError.innerHTML = "Error: El campo correo esta vacio."
    }

    //Limitador de caracteres 1
    else if(inputCorreo.value.length < 10){
        pMensajeError.innerHTML = "Error: El campo correo es demasiado corto."
    }

    //Limitador de caracteres 2
    else if(inputCorreo.value.length > 50){
        pMensajeError.innerHTML = "Error: El campo correo excede la longitud permitida."
    }

    //Mensaje de confirmacion de datos
    else{
        //Para borrar el mensaje de error y no quede en la pantalla
        pMensajeError.innerHTML = "";

        //Mensaje de confirmacion de envio de datos
        pMensajeConfirmacion.innerHTML = "Los datos se enviaron correctamente";
    }



});

// Buscar el boton mediante su id
// LImpiar los datos de formulario
let buttonLimpiar = document.getElementById('btn-limpiar-datos');

//Alerta al presionar el boton de limpiar 
buttonLimpiar.addEventListener('click', function () {

    alert('Mensaje de alerta limpiar');

    //Funcion para dejar el campo de nombre en blanco
    let inputNombre = document.getElementById('input-nombre');
    inputNombre.value = '';

    //Funcion para dejar el campo de correo en blanco 
    let inputCorreo = document.getElementById('input-correo');
    inputCorreo.value = '';

});


