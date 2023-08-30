const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    if (text.trim() === "") {
      return 0;
    } else {
      const contarPalabras = text.trim().split(/\s+/);
      return contarPalabras.length;
    }
  },
 
// trim elimina los espacio en blanco en una cadena de texto
// split se usa para dividir una cadena en parte mas pequeña (/s+/)  en espacio blanco





  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  // con length retorna la longitud 







  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    const almacenText = text.replace(/[^\w]/g,'');
    return almacenText.length;
  },

  // lo que se hizo fue que con la variable almacenText almacenar la cadena de texto despues de eliminar y los signo de puntuacion 
// busca replace todas las expresiones que no sean letras ni numeros



getAverageWordLength: (text) => {
   //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
   if(typeof text !== "string" ){
    return 0;
  }
  const palabraLongitud = text.trim().split(/\s+/);
  return palabraLongitud.reduce((total, palabra2) => total + palabra2.length,0) / palabraLongitud.length;
 
},
// trim elimina los espacio en blanco en una cadena de texto
// split(/s+/) se usa para dividir una cadena en espacio blanc
// reduce () suma la longitud de las palabras y despues suma y divide para obtener la longitud
//https://www.google.com/search?q=funci%C3%B3n+de+conteo+de+palabras+en+javascript&source=lmns&bih=602&biw=1332&hl=es-419&sa=X&ved=2ahUKEwjYnPu4j4KBAxUDSDABHbseDo0Q0pQJKAB6BAgBEAI#fpstate=ive&vld=cid:e4dff459,vid:PlqTmim0n7w
//https://www.jstips.co/es_es/javascript/array-average-and-median/
  

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const contarNumeros = text.match(/\d+/g) || [];
    return contarNumeros.length;
  },
  


  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers =text.match(/\d+/g);
    if (numbers){
      const suma = numbers.reduce((acomuladorReduccion , numeroActual)=> acomuladorReduccion + parseInt(numeroActual),0)
      return suma;
     
    }else{
      return 0;
    }
  },
};
//match acomula los numero en un dentro de un texto si se encuentro un numero pasaria reduce()donde ahi se suma y toma el valor inicial en 0
export default analyzer;
