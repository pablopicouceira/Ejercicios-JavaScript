"use strict";

// Prime Time

// Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number,
// otherwise return the string false.The range will be between 1 and 2 ^ 16.

function PrimeTime(num) {
  if (num > 1 && num < 2 ** 16) {
    let contador = num - 1;
    while (contador > 1) {
      if (num % contador === 0) {
        return false;
      }
      contador--;
    }
    return true;
  }
}
console.log(PrimeTime(17));

// Run Length

// Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length
// encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a
// single character of the repeating sequence.For example: "wwwggopp" would return 3w2g1o2p.The string will not contain any numbers,
// punctuation, or symbols.

const text = "wwwbbbwssrbbmmm";

function RunLength(str) {
  let array = [];
  let contador = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      contador++;
    } else {
      array.push(contador);
      array.push(str[i]);

      contador = 1;
    }
  }
  const newStr = array.join("");
  return newStr;
}

console.log(RunLength(text));

// Prime Mover

// Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the
// output should be 53 as 53 is the 16th prime number.

function PrimeMover(num) {
  let np = 0;
  let n = 2;
  let array = [];
  if (num < 10 ** 4 && num > 0) {
    while (np < num) {
      if (isPrime(n)) {
        //console.log(n + ' es un numero primo');
        np++; // Al cumplirse la condición, incrementamos el contador de números primos
        array.push(n);
      }
      n++; // Si no se cumple el "if", saltamos aquí directamente
    }
    return array[num - 1];
  }
}

function isPrime(aNumber) {
  let contador = 2;
  while (contador < aNumber) {
    if (aNumber % contador === 0) {
      return false;
    }
    contador++;
  }
  return true;
}

PrimeMover(100);

// Division

// Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common
// Factor. That is, return the greatest number that evenly goes into both numbers with no remainder.For
// example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both
// parameters will be from 1 to 10 ^ 3.

function greatestCommonFactor(num1, num2) {
  let array = [];
  let contador = 0;
  while (contador < Math.min(num1, num2) + 1) {
    if (num1 % contador == 0 && num2 % contador == 0) {
      array.push(contador);
    }
    contador++;
  }
  return array[array.length - 1];
}

console.log(greatestCommonFactor(1, 1));

// Array Addition

// Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers
// in the array(excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string
// false.For example: if arr contains[4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not
// be empty, will not contain all the same elements, and may contain negative numbers.

let array = [12, 3, 25, 8, 2, 14];

function getMaxOfArray(unArray) {
  return Math.max.apply(null, unArray);
}
let max = getMaxOfArray(array);

console.log(max);

let posicion = array.indexOf(max);
console.log(posicion);

array.splice(posicion, 1);
console.log(array);

function comparar(a, b) {
  return b - a;
}

array.sort(comparar);

console.log(array);

function ArrayAddition(arr) {
  return arr;
}

// Palindrome Two

// Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome,
// (the string is the same forward as it is backward) otherwise return the string false.The parameter entered may have punctuation and
// symbols but they should not affect whether the string is in fact a palindrome.For example: "Anne, I vote more cars race Rome-to-Vienna"
// should return true.

let string = "A warx at Tarawa!"; //"Noel - sees Leon"; // "A war at Tarawa!"

function PalindromeTwo(str) {
  let a = 0;
  let newString = "";
  while (a <= str.length) {
    if (esAlfaNumerico(str.charAt(a))) {
      newString = newString + str.charAt(a);
    }

    a++;
  }
  console.log(newString);
  let upperString = "";
  upperString = newString.toUpperCase();
  console.log(upperString);
  let b = upperString.length;
  let invertedString = "";
  while (b >= 0) {
    invertedString = invertedString + upperString.charAt(b);
    b--;
  }
  console.log(invertedString);

  if (upperString === invertedString) {
    return true;
  }
  return false;
}

function esAlfaNumerico(caracter) {
  let ascii = caracter.toUpperCase().charCodeAt(0);
  return (ascii > 47 && ascii < 58) || (ascii > 64 && ascii < 91);
}

console.log(PalindromeTwo(string));

// String Scramble

// Have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1
// characters can be rearranged to match str2, otherwise return the string false.For example: if str1 is "rkqodlw" and str2 is "world"
// the output should return true. Punctuation and symbols will not be entered with the parameters.

let string1 = "coodrebtqqkye"; // h3llko
let string2 = "codrebtaqqq"; // hello

function StringScramble(str1, str2) {
  let x1 = str1.split("");
  let x2 = str2.split("");

  for (let i = 0; i < x1.length; i++) {
    for (let j = 0; j < x2.length; j++) {
      if (!checkCharacterInString(x2, x1[i])) {
        x1.splice(i, 1);
        i = i - 1;
      }
    }
  }

  let y1 = x1.sort();
  let y2 = x2.sort();

  for (let i = 0; i < y1.length; i++) {
    if (y1[i] !== y2[i]) {
      y1.splice(i, 1);
      i = i - 1;
      console.log(y1);
    }
  }

  if (y1.length - y2.length === 0) {
    return true;
  }
  return false;
}

console.log(StringScramble(string1, string2));

function checkCharacterInString(str, character) {
  for (let i = 0; i < str.length; i++) {
    if (str.includes(character)) {
      return true;
    }
    return false;
  }
}

//   Arith Geo II

//   Have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an
//   arithmetic pattern or return "Geometric" if it follows a geometric pattern.If the sequence doesn't follow either pattern return -1. An
//   arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term
//   after the first is multiplied by some constant or common ratio.Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
//   Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.

let arrayx = [1, 2, 3, 4, 5, 10, 20];

function ArithGeoII(arr) {
  if (isGeometric(arr)) {
    return "Geometric";
  } else if (isArithmetic(arr)) {
    return "Arithmetic";
  } else return -1;
}

console.log(ArithGeoII(arrayx));

function isArithmetic(arr) {
  let diference = arr[1] - arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diference) {
      return false;
    }
  }
  return true;
}

console.log(isArithmetic(arrayx));

function isGeometric(arr) {
  let quotient = arr[1] / arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] / arr[i] !== quotient) {
      return false;
    }
  }
  return true;
}

console.log(isGeometric(arrayx));

// var lista = [7, 9, 14, 22, 4, 6];

// var resultado1 = lista.reduce(function(total, valor) {
//   return total + valor;
// });
// console.log(resultado1);

// var mayor = lista.reduce(function (resultado, valor) {
//   if (resultado < valor) { resultado = valor };

//   console.log(resultado);

//   return valor;
// }

// console.log(mayor)
