/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

for (let hora = 9; hora <= 20; hora++) {
  for (let minuto = 0; minuto < 60; minuto += 5) {
    let mediaHora;
    if (minuto == 5) {
      mediaHora = true;
      document.write(
        "la hora es: " +
          hora.toString().padStart(2, "0") +
          ":" +
          minuto.toString().padStart(2, "0") +
          " True" +
          "<br>",
      );
    } else {
      mediaHora = false;
      document.write(
        "La hora es: " +
          hora.toString().padStart(2, "0") +
          ":" +
          minuto.toString().padStart(2, "0") +
          " False" +
          "<br>",
      );
    }
  }
}
