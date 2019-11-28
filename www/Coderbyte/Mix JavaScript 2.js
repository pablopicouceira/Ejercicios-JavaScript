"use strict";

// Caesar Cipher

// Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the
// shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet(in this case N will be num).
// Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should
// be "Ecguct Ekrjgt".

let inputr = "coderBYTE";
let numero = 2;

function CaesarCipher(str, num) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (isLowercase(str[i])) {
      if (num > 122 - str.charCodeAt(i)) {
        newString =
          newString + String.fromCharCode(96 + num - (122 - str.charCodeAt(i)));
      } else {
        newString = newString + String.fromCharCode(str.charCodeAt(i) + num);
      }
    } else if (isUppercase(str[i])) {
      if (num > 90 - str.charCodeAt(i)) {
        newString =
          newString + String.fromCharCode(64 + num - (90 - str.charCodeAt(i)));
      } else {
        newString = newString + String.fromCharCode(str.charCodeAt(i) + num);
      }
    } else newString = newString + str[i];
  }
  return newString;
}

console.log(CaesarCipher(inputr, numero));

function isLowercase(character) {
  let ascii = character.charCodeAt(0);
  return ascii > 96 && ascii < 123;
}

function isUppercase(character) {
  let ascii = character.charCodeAt(0);
  return ascii > 64 && ascii < 91;
}

// Simple Mode

// Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode).
// For example: if arr contains[10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the
// array first(ie. [5, 10, 10, 6, 5] should return 5 because it appeared first).If there is no mode return -1. The array will not be empty.

/* Recorremos el array para crear un objeto cuyas propiedades son los valores del array sus valores las repeticiones. Obtenemos el valor
   mayor de esas propiedades mediante Object.entries. Después hacemos una función que nos devuelve el número de repeticiones de un número en
   un array. Finalmente, hacemos un bucle que retorne el primer valor del array que iguale esa función */

let arreglo = [4, 5, 1, 6, 7, 5, 8, 100, 5, 200, 1000, 5];

function SimpleMode(arr) {
  let characterList = {};
  for (let i = 0; i < arr.length; i++) {
    if (!characterList[arr[i]]) {
      characterList[arr[i]] = 1;
    } else {
      characterList[arr[i]]++;
    }
  }

  let values = [];
  for (let [key, value] of Object.entries(characterList)) {
    console.log(`${key}: ${value}`);
    values.push(value);
  }

  if (Math.max(...values) === 1) {
    return -1;
  } else
    for (let i = 0; i < arr.length; i++) {
      if (countRepetitions(arr, arr[i]) === Math.max(...values)) {
        return arr[i];
      }
    }
}

function countRepetitions(arr, num) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      contador++;
    }
  }
  return contador;
}

console.log(countRepetitions(arreglo, 5));

console.log(SimpleMode(arreglo));

// Vamos a introducir en el objeto vacío las distintas letras que vayamos encontrando en el string
// "text" como propiedades.Así mismo vamos a decir cuántas veces se encuentra dicha letra en el string
// en el valor de cada propiedad.En resumen, cada letra distinta que haya en "text" será una propiedad,
// y tendrá como valor el número de veces que se repite dicha letra a lo largo de todo el string.

// Consecutive

// Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr
// consecutive from the lowest number to the highest number.For example: If arr contains[4, 8, 6] then the output should be 2 because two numbers need to be
// added to the array(5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less
// than 2 elements.

/* Ordenamos el array para conseguir el valor más alto y el más bajo. Después usamos un bucle while con estos dos valores que usamos para 
   para pushear los valores intermedios a un nuevo array. El resultado saldŕa de restarle a la longitud de ese nuevo array la longitud del
   array original - 2 (se le resta - 2 porque así nos queda la longitud de los elementos intermedios, que deberíamos eliminar del array 
   nuevo) */

let array = [-2, 10, 4];

function Consecutive(arr) {
  let orderedArray = arr.sort(function(a, b) {
    return a - b;
  });

  let nuevo = [];
  let i = orderedArray[0] + 1;

  while (i < orderedArray[orderedArray.length - 1]) {
    nuevo.push(i);
    i++;
  }
  return nuevo.length - (orderedArray.length - 2);
}

console.log(Consecutive(array));

// Formatted Division

// Have the function FormattedDivision(num1, num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly
// formatted commas and 4 significant digits after the decimal place.For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The
// output must contain a number in the one's place even if it is a zero.

/* En primer lugar, obtenemos un string con 4 decimales. Despueś extraemos a un array los decimales incluido el punto, y a otro la parte entera, que es la que 
   formatearemo */

let input1 = 454879795;
let input2 = 3;

function FormattedDivision(num1, num2) {
  let result = num1 / num2;
  let stringWith4Decimals = result.toFixed(4).toString(); // Aquí obtenemos el string con 4 decimales
  let arrayWith4Decimals = [];

  for (let i = 0; i < stringWith4Decimals.length; i++) {
    arrayWith4Decimals.push(stringWith4Decimals[i]);
  }

  let leftArray = arrayWith4Decimals.slice(0, arrayWith4Decimals.indexOf("."));
  let rightArray = arrayWith4Decimals.slice(arrayWith4Decimals.indexOf("."));
  let resto = leftArray.length % 3;

  if (resto !== 0) {
    for (let i = 0; i < leftArray.length - 2; i++) {
      console.log(i);
      leftArray.splice(resto + i, 0, ",");
      console.log(leftArray);
      i = i + 3;
    }
  } else {
    for (let i = 3; i < leftArray.length - 2; i++) {
      leftArray.splice(resto + i, 0, ",");

      i = i + 3;
    }
  }
  return leftArray.concat(rightArray).join("");
}

console.log(FormattedDivision(input1, input2));

// Counting Minutes

// Have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon
// and am or pm) separated by a hyphen and return the total number of minutes between the two times.The time will be in a 12 hour clock
// format.For example: if str is 9: 00am - 10: 00am then the output should be 60. If str is 1: 00pm - 11: 00am the output should be 1320.

let input = "1:00pm-11:00am";

function CountingMinutes(str) {
  let start = str.slice(0, str.indexOf("-"));
  let startAmPm = start.slice(start.length - 2);
  let startHour = parseInt(start.slice(0, start.indexOf(":")));

  if (startAmPm == "am") {
    startHour = parseInt(start.slice(0, start.indexOf(":")));
  } else {
    parseInt(start.slice(0, start.indexOf(":")));
  }

  let startMinutes = parseInt(
    start.slice(start.indexOf(":") + 1, start.length - 2)
  );

  let totalStartMinutes = startHour * 60 + startMinutes;
  let finish = str.slice(str.indexOf("-") + 1);
  let finishAmPm = finish.slice(finish.length - 2);
  let finishHour = parseInt(finish.slice(0, finish.indexOf(":")));
  console.log(totalStartMinutes);

  if (finishAmPm == "am") {
    finishHour = parseInt(finish.slice(0, finish.indexOf(":")));
  } else {
    parseInt(finish.slice(0, finish.indexOf(":")));
  }

  let finishMinutes = parseInt(
    finish.slice(finish.indexOf(":") + 1, finish.length - 2)
  );

  let totalFinishMinutes = finishHour * 60 + finishMinutes;
  console.log(totalFinishMinutes);
  let result;

  console.log(totalFinishMinutes - totalStartMinutes);

  if (startAmPm === finishAmPm) {
    if (totalStartMinutes < totalFinishMinutes) {
      result = totalFinishMinutes - totalStartMinutes;
    } else {
      result = 1440 - Math.abs(totalFinishMinutes - totalStartMinutes);
    }
  } else {
    if (totalStartMinutes < totalFinishMinutes) {
      result = 720 - totalStartMinutes + totalFinishMinutes; //1320
    } else {
      result = 720 - (totalStartMinutes - totalFinishMinutes);
    }
  }
  return result;
}
console.log(CountingMinutes(input));

// Permutation Step

// Have the function PermutationStep(num) take the num parameter being passed and return the next number greater than num using the same
// digits.For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).

/* Recorremos el array desde el final al principio hasta encontrar un i < i+1 e intercambiamos sus posiciones. Despues dividimos el número
   en 2 arrays: el de la izquierda, va desde el principio hasta i, y el de de la derecha es la parte que queda hasta el final. A continuación
   se ordena el array de la derecha de menor a mayor y se concatena con el de la izquierda. */

let inputx = 897654321;

function PermutationStep(num) {
  let strNum = num.toString(); // convertimos el número a string para manejarlo
  let nuevoArray = [];
  for (let i = 0; i < strNum.length; i++) {
    nuevoArray.push(strNum[i]); // convertimos el número en un array
  }

  let number = 0; // declaramos esta variable, que nos servirá como valor de referencia para dividir los dos array que tendremos después
  for (let i = nuevoArray.length - 1; i > -1; i--) {
    if (nuevoArray[i] < nuevoArray[i + 1]) {
      let temp = nuevoArray[i];
      nuevoArray[i] = nuevoArray[i + 1];
      nuevoArray[i + 1] = temp;
      number = i;
      break; // solo hasta el primero, no queremos seguir
    }
  }

  let leftArray = nuevoArray.slice(0, number + 1); // slice extrae hasta, pero sin incluir el final.

  let rightArray = nuevoArray.slice(number + 1); // devuelve desde la posición indicada (incluida) hasta el final.

  let orderedArray = rightArray.sort(function(a, b) {
    // ordenamos el array de la derecha
    return a - b;
  });

  let solution = parseInt(leftArray.concat(orderedArray).join("")); // concatenamos los dos arrays, hacemos join para convertirlo en un string
  // y parseInt para convertirlo en número
  if (solution > num) {
    return solution;
  } else return -1;
}

console.log(PermutationStep(inputx));

// Prime Checker

// Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0.
// For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes.

/* El ejercicio no lo dice, pero el número será < 1000. */
/*
let number = 45; //465, 546, 564, 645, 654

console.log(number.toString().length);

function PrimeChecker2Element(num) {
  if (is2ElementsArray(num)) {
    let doubleFigure = parseInt(
      Array.from(num.toString())
        .reverse()
        .join("")
    );
    console.log(doubleFigure);

    if (PrimeTime(doubleFigure)) {
      return 1;
    } else return 0;
  }
}
PrimeChecker2Element(number);

function PrimeChecker3Element(num) {}

function PrimeTime(num) {
  let contador = num - 1;
  while (contador > 1) {
    if (num % contador === 0) {
      return false;
    }
    contador--;
  }
  return true;
}
console.log(PrimeTime(number));

function is2ElementsArray(num) {
  let transformedNumber = num.toString();
  if (transformedNumber.length === 2) {
    return true;
  }
  return false;
}

console.log(is2ElementsArray(number));

function comb(alfabeto, n, resultados, resultado) {
  if (!resultado) {
    resultado = [];
  }
  for (var i = 0; i < alfabeto.length; ++i) {
    var newResultado = resultado.slice();
    var newAlfabeto = alfabeto.slice();
    newResultado.push(alfabeto[i]);
    newAlfabeto.splice(i, 1);
    if (n > 1) {
      comb(newAlfabeto, n - 1, resultados, newResultado);
    } else {
      resultados.push(newResultado);
    }
  }
}

var cadena = [1, 2, 3, 4, 5, 6, 7, 8]; //Caracteres que va a combinar
var arrayCombinaciones = []; //Almacena las combinaciones
var grupo = 4; //le indico la cantidad de cuantos caracteres quiero que sean las combinaciones.

comb(cadena, grupo, arrayCombinaciones);

console.log(JSON.stringify(arrayCombinaciones));
*/

// Dash Insert II

// Have the function DashInsertII(str) insert dashes('-') between each two odd numbers and insert asterisks('*') between each two even
// numbers in str.For example: if str is 4546793 the output should be 454 * 67 - 9 - 3. Don't count zero as an odd or even number.

let figure = 56647304;

function DashInsertII(num) {
  let string = Array.from(num.toString());

  for (let i = 0; i < string.length - 1; i++) {
    if (isEven(parseInt(string[i])) && isEven(parseInt(string[i + 1]))) {
      string.splice(i + 1, 0, "*");
    } else if (isOdd(parseInt(string[i])) && isOdd(parseInt(string[i + 1]))) {
      string.splice(i + 1, 0, "-");
    }
  }
  return string.join("");
}

console.log(DashInsertII(figure));

function isEven(num) {
  if (num % 2 === 0 && num !== 0) {
    return true;
  }
  return false;
}

console.log(isEven(0));

function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  }
  return false;
}

console.log(isOdd(9));

// Swap II

// Have the function SwapII(str) take the str parameter and swap the case of each character. Then, if a letter is between two numbers
// (without separation), switch the places of the two numbers.For example: if str is "6Hello4 -8World, 7 yes3" the output should be
// 4hELLO6 - 8wORLD, 7 YES3.

let phrase = "2S 6 du5d4e"; // "Hello -5LOL6" hELLO -6lol5 // '2S 6 du5d4e' 2s 6 DU4D5E

function SwapII(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    if (isLowercase(str.charAt(i))) {
      string = string + str.charAt(i).toUpperCase();
    } else if (isUppercase(str.charAt(i))) {
      string = string + str.charAt(i).toLowerCase();
    } else string = string + str.charAt(i);
  }

  return string
    .split(" ")
    .map(swapPosition)
    .join(" ");
}

function isLowercase(character) {
  let ascii = character.charCodeAt(0);
  return ascii > 96 && ascii < 123;
}

function isUppercase(character) {
  let ascii = character.charCodeAt(0);
  return ascii > 64 && ascii < 91;
}

function isANumber(character) {
  let ascii = character.charCodeAt(0);
  return ascii > 47 && ascii < 59;
}

function swapPosition(word) {
  let array = Array.from(word);

  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 2; j < array.length; j++) {
      if (isANumber(array[i]) && isANumber(array[j])) {
        for (let k = i + 1; k < j; k++) {
          if (isALetter(array[k])) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
          }
          return array.join("");
        }
      }
    }
  }
  return word;
}

function isALetter(caracter) {
  let ascii = caracter.toUpperCase().charCodeAt(0);
  return ascii > 64 && ascii < 91;
}
