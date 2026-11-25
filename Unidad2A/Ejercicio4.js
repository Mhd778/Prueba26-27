/* eslint-disable no-unused-vars */

let respuesta = prompt("Introduce la edad: ");
let edad = parseInt(respuesta);
while (isNaN(edad) || edad < 0) {
  alert("Error: No se puede introducir una edad negativa.");

  respuesta = prompt("Por favor, introduce de nuevo la edad: ");
  edad = parseInt(respuesta);
}

if (edad <= 12) {
  alert("Niño.");
} else if (edad <= 26) {
  alert("Joven");
} else if (edad <= 60) {
  alert("Adulto.");
} else {
  alert("Jubilado.");
}
