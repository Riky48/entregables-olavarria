"use stric"

// scprit para formulario// 

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let btnEnviar = document.getElementById("enviar");

let informacion = [];

btnEnviar.addEventListener("click", (e) => {

    e.preventDefault(); //previene la accion del form al actualizar la pagina
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = telefono.value;
    informacion[3] = email.value;
    if (!nombre.value || !apellido.value || !telefono.value || !email.value) {
        alert("Todos los campos son obligatorios, por favor complételos");
        return;
      }
    let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"});
     // los corchetes de "informacion" lo pasa como un arreglo
     // el segundo parametro es para saber que tipo de texto va a guardarse
        saveAs(blob, "contact.txt"); // usamos la libreria
     
        //EL METODO SE USA SOLO CON LA LIBRERIA FILESAVER.JS


})