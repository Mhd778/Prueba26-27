/* eslint-disable no-useless-assignment */
/* eslint-disable no-unassigned-vars */
/* eslint-disable no-unused-vars */

let edad = prompt("Cual es tu edad: ");
switch (true) {
  case edad < 0:
    alert("Error: no admite numero negativo, introduce su edad.");
    break;

  case edad <= 12:
    alert("Niño.");
    break;

  case edad <= 26:
    alert("Joven.");
    break;

  case edad <= 60:
    alert("Adulto.");
    break;

  default:
    alert("Jubilado.");
}
