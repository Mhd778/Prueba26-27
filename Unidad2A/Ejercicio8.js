//* eslint-disable no-unused-vars */

let jugadora = prompt("Introduce el nombre de la jugadora: ");

let jugadoraconvocada = ["Maria", "Ana", "Carlota", "Cris", "Paula"];

for (let i = 0; i < jugadoraconvocada.length; i++) {
  if (jugadora === jugadoraconvocada[i]) {
    alert("La jugadora " + jugadoraconvocada[i] + " esta convovada.");
    break;
  } else if (i === jugadoraconvocada.length - 1) {
    alert("La jugadora No esta convovada.");
    break;
  }
}
