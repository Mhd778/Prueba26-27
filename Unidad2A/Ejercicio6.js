//* eslint-disable no-unused-vars */
//* eslint-disable no-useless-assignment */

let nombre = "Adolfo";
let apellido = "Suarez";

let pregunta = prompt(
  " ¿Cuál fue el primer presidente de la democracia española?",
);

do {
  if (pregunta !== nombre + " " + apellido) {
    pregunta = prompt(
      "ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?",
    );

    if (pregunta === nombre) {
      pregunta = prompt(
        "Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?",
      );
    } else if (pregunta === apellido) {
      pregunta = prompt(
        "Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?",
      );
    }
  }
} while (pregunta !== nombre + " " + apellido);
alert(
  `Correcto ${nombre} ${apellido} es el pirmer Presidente de la democracia en españa.`,
);
