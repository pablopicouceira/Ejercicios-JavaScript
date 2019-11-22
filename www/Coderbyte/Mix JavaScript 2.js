"use strict";

// Consecutive

// Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the
// contents of arr consecutive from the lowest number to the highest number.For example: If arr contains[4, 8, 6] then the output should be
// 2 because two numbers need to be added to the array(5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may
// be entered as parameters and no array will have less than 2 elements.

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

// Prime Checker

// Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0.
// For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes.

/* El ejercicio no lo dice, pero el número será < 1000. */

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

// Counting Minutes

// Have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon
// and am or pm) separated by a hyphen and return the total number of minutes between the two times.The time will be in a 12 hour clock
// format.For example: if str is 9: 00am - 10: 00am then the output should be 60. If str is 1: 00pm - 11: 00am the output should be 1320.

let input = "2:30pm-1:00am";
console.log(input.split(""));

let start = input.slice(0, input.indexOf("-"));
console.log(start);

let finish = input.slice(input.indexOf("-") + 1);
console.log(finish);

// Formatted Division

// Have the function FormattedDivision(num1, num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly
// formatted commas and 4 significant digits after the decimal place.For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The
// output must contain a number in the one's place even if it is a zero.

// console.log(result);

// console.log(stringWith4Decimals);

// console.log(stringWith4Decimals.length);
// let otro = result;

// console.log(newArray);

// console.log(solution);
let input1 = 454879795;
let input2 = 3;

function FormattedDivision(num1, num2) {
  let result = num1 / num2;
  let stringWith4Decimals = result.toFixed(4).toString();
  let arrayWith4Decimals = [];

  for (let i = 0; i < stringWith4Decimals.length; i++) {
    arrayWith4Decimals.push(stringWith4Decimals[i]);
  }

  let leftArray = arrayWith4Decimals.slice(0, arrayWith4Decimals.indexOf("."));
  let rightArray = arrayWith4Decimals.slice(arrayWith4Decimals.indexOf("."));
  let resto = leftArray.length % 3;
  console.log(leftArray);
  console.log(rightArray);
  console.log(leftArray.length);
  console.log(resto);
  // let solution2 = leftArray.split("");

  // solution2.splice(resto, 0, ",");
  console.log(leftArray);
  console.log(`Resto: ${resto}`);
  // newString.split("");
  // console.log(newString);
  if (resto !== 0) {
    for (let i = 0; i < leftArray.length - 2; i++) {
      console.log(i);
      leftArray.splice(resto + i, 0, ",");
      console.log(leftArray);
      i = i + 3;
    }
  } else {
    for (let i = 3; i < leftArray.length - 2; i++) {
      console.log(i);
      leftArray.splice(resto + i, 0, ",");
      console.log(leftArray);
      i = i + 3;
    }

    //solution2.splice(0, 1);
  }
  return leftArray.concat(rightArray).join("");
}

console.log(FormattedDivision(input1, input2));
