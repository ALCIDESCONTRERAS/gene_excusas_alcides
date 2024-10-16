/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excusa = "Es que mi ";
  let culpable = ["Perro ", "Gato ", "Loro ", "Gallina ", "Primo "];
  let hizo = ["me mojó ", "me mordió ", "tiró ", "quemó ", "me pateó "];
  let evitar = [
    "la tarea ",
    "mi zapato ",
    "el dedo del pie ",
    "la mano izquierda ",
    "el ordenador "
  ];
  let cuando = [
    "ayer por la noche",
    "cuando venia de camino",
    "mientras conducía",
    "cuando dormía",
    "en la tarde que estudiaba"
  ];

  let excusa1 = Math.floor(Math.random() * culpable.length);
  let excusa2 = Math.floor(Math.random() * hizo.length);
  let excusa3 = Math.floor(Math.random() * evitar.length);
  let excusa4 = Math.floor(Math.random() * cuando.length);

  document.querySelector("#Excusa_aleatoria").innerHTML =
    excusa +
    culpable[excusa1] +
    hizo[excusa2] +
    evitar[excusa3] +
    cuando[excusa4];
};
