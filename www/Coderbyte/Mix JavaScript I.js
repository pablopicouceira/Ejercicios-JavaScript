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
//   upperString = newString.toUpperCase();

//   let b = upperString.length;

//   let invertedString = "";

//   while (a >= 0) {
//     invertedString = invertedString + upperString.charAt(b);
//     b--;
//   }
//   if (upperString === invertedString) {
//     consoele.log("true");
//   }
// }

// eliminarNoLetras(string);

// function firstReverse(str) {
//   let a = str.length;

//   // console.log(a);
//   let invertedString = "";

//   while (a >= 0) {
//     invertedString = invertedString + str.charAt(a);
//     a--;
//     // console.log(a);
//   }

//   return invertedString;
// }

// console.log(firstReverse(upperString));
