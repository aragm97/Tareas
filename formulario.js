let formulario = document.querySelector(".formulario");

formulario.onsubmit = function(age) {

  age.preventDefault(); // Se agregó "Default" para corregir la syntaxis 
  
  let name = formulario.elements[0]; // Se agregó ";" y se cambió var por let, estos cambios se hicieron en todo el documento js
  let age = formulario.elements[1];//se cambió el nombre de la variable e a age
  let nationality = formulario.elements[2];// se cambió el nombre de la varriable na por nationality ya que hace referencia a esta, se escribió en inglés porque la palabra en español ya estaba declarada 

  let nombre = name.value;
  let edad = age.value;

  let i = nationality.selectedIndex;
  let nacionalidad = nationality.options[i].value;
 // console.log(nombre, edad);
 // console.log(nacionalidad);

  if (nombre.length === 0) {
    name.classList.add("error");
  }
  if (edad >= 18 || edad < 120) {// se cambiaron los operadores para que tenga lógica la restricción de edad
    age.classList.add("error");
  }

if (nombre.length > 0 && (edad >= 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
};

/* let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar); */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

let lista = document.getElementById("lista-de-invitados");

let elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); // se cambió added por add para corregir la operación 
lista.appendChild(elementoLista);
/* 
let spanNombre = document.createElement("span");
let inputNombre = document.createElement("input");
let espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio); */

function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span");
let inputNombre = document.createElement("input");
let espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(span);
elementoLista.appendChild(input);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre, elementoLista);
crearElemento("Edad", edad, elementoLista);
crearElemento("Nacionalidad", nacionalidad, elementoLista);


let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";

let corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
  elementoLista.remove(); 
// this.parentNode.style.display = 'none';
 botonBorrar.parentNode.remove(); 
  };

  
}

