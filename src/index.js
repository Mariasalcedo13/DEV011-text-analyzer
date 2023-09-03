import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const userInput = document.querySelector('textarea[name="user-input"]');
const resetButton = document.getElementById('reset-button');
const metricasDeCadaItems = document.querySelectorAll('.contenedor-li li');

const pruebaMetricas = () => {
  const text = userInput.value;
  metricasDeCadaItems[0].textContent = `Caracteres: ${text.length}`;
  metricasDeCadaItems[1].textContent = `Caracteres sin Espacio: ${analyzer.getCharacterCountExcludingSpaces(text)}`;
  metricasDeCadaItems[2].textContent = `Palabras: ${analyzer.getWordCount(text)}`;
  metricasDeCadaItems[3].textContent = `Números: ${analyzer.getNumberCount(text)}`;
  metricasDeCadaItems[4].textContent = `Suma Numeros: ${analyzer.getNumberSum(text)}`;
  metricasDeCadaItems[5].textContent = `Promedio Longitud: ${analyzer.getAverageWordLength(text)}`;
};
//definimos la funcion
const resultadoMetricas = () => {
  userInput.value = '';
  pruebaMetricas();
};
//eventos los 2 elementos
userInput.addEventListener('keyup', pruebaMetricas);
resetButton.addEventListener('click', resultadoMetricas);

pruebaMetricas();
// se habilita el boton 
/*let funciónBoton = document.querySelector("textarea");
funciónBoton.addEventListener("keyup",()=>{

})

let botonMetricas =document.getElementById("reset-button");
botonMetricas.addEventListener("click",()=>{
    funciónBoton.value = ""
})*/

