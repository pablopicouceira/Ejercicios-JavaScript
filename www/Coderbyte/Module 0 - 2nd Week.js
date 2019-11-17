'use strict';

//Letter Changes

// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every
// letter in the string with the letter following it in the alphabet(ie.c becomes d, z becomes a).Then capitalize every vowel in this
// new string (a, e, i, o, u) and finally return this modified string.

function letterChanges(str) {
  let nuevastr = '';
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (c >= 'a' && c <= 'z') {
      c = String.fromCharCode(c.charCodeAt(0) + 1);
      if (c > 'z') {
        c = 'a';
      }
    } else {
      if (c >= 'A' && c <= 'Z') {
        c = String.fromCharCode(c.charCodeAt(0) + 1);
        if (c > 'Z') {
          c = 'A';
        }
      }
    }
    nuevastr = nuevastr + c;
  }
  str = nuevastr;
  nuevastr = '';
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
      c = c.toUpperCase();
    }
    nuevastr = nuevastr + c;
  }

  return nuevastr;
}

console.log(letterChanges('construyendo tres muros defensivos ante la desaceleración'));

// Simple Symbols

// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either
// returning the string true or false.The str parameter will be composed of + and = symbols with several characters between them
// (ie. ++d +=== +c++ == a) and for the string to be true each letter must be surrounded by a + symbol.So the string to the left would
// be false.The string will not be empty and will have at least one letter.

function simpleSymbols(str) {
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
      let correcto = true;
      if (i > 0) {
        let a = str.charAt(i - 1);
        correcto = correcto && a == '+';
      } else {
        correcto = false;
      }
      if (i < str.length - 1) {
        let p = str.charAt(i + 1);
        correcto = correcto && p == '+';
        console.log(correcto);
      } else {
        correcto = false;
      }
      if (!correcto) {
        return false;
      }
    }
  }
  return true;
}

console.log(simpleSymbols('+a+---+---c+d+e+'));

// Closest Enemy

// Have the function ClosestEnemy(arr) take the array of numbers stored in arr and from the position in the array where a 1 is, return
// the number of spaces either left or right you must move to reach an enemy which is represented by a 2. For example: if arr is
// [0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3 because the closest enemy(2) is 3 spaces away from the 1. The array will
// contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program
// should return a 0.

function closestEnemy(arr) {
  let uno = arr.indexOf(1); // indexOf devuelve la posición en el array del carácter
  console.log(uno);
  let distanceRight = 0;

  for (let i = arr.length; i > arr.indexOf(1); i--) {
    if (arr[i] == 2) {
      distanceRight = i - arr.indexOf(1);
    }
  }
  console.log(distanceRight);
  let distanceLeft = 0;

  for (let i = 0; i < arr.indexOf(1); i++) {
    if (arr[i] == 2) {
      distanceLeft = arr.indexOf(1) - i;
    }
  }

  if (distanceRight == 0) {
    return distanceLeft;
  } else if (distanceLeft == 0) {
    return distanceRight;
  } else if (distanceRight > distanceLeft) {
    return distanceLeft;
  } else {
    return distanceRight;
  }
}

let array = [0, 0, 1, 0, 0, 2, 0, 2];
console.log(closestEnemy(array));
