'use strict';

// First Reverse

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the
// input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function firstReverse(str) {
  let a = str.length;

  // console.log(a);
  let invertedString = '';

  while (a >= 0) {
    invertedString = invertedString + str.charAt(a);
    a--;
    // console.log(a);
  }

  return invertedString;
}

console.log(firstReverse('devolver cadena javascript sin signos'));

// First Factorial

// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4,
// then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will
// always be an integer.

function firstFactorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log(firstFactorial(4));

// Longest Word

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or
// more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will
// not be empty

function longestWord(sen) {
  let a = 0;
  let newString = '';

  while (a <= sen.length) {
    if (esAlfaNumerico(sen.charAt(a)) || sen.charAt(a) === ' ') {
      newString = newString + sen.charAt(a);
    }

    a++;
  }

  let length = 0;
  let palabra = '';
  let array = newString.split(' ');

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > length) {
      length = array[i].length;
      palabra = array[i];
    }
  }
  return palabra;
}

function esAlfaNumerico(caracter) {
  let ascii = caracter.toUpperCase().charCodeAt(0);
  return (ascii > 47 && ascii < 58) || (ascii > 64 && ascii < 91);
}

console.log(longestWord('123456789 98765432'));

// function LongestWord(sen) {
//   let longestWord = '';

//   sen.split(' ').forEach((word) => {
//     const clearedText = clearText(word);

//     if (clearedText.length > longestWord.length) longestWord = clearedText;
//   });
//   // code goes here
//   return longestWord;
// }

// function clearText(text) {
//   let clearedText = '';
//   text.split('').forEach((letter) => {
//     if (isAlphaNumeric(letter)) clearedText += letter;
//   });

//   return clearedText;
// }

// function isAlphaNumeric(letter) {
//   const n = letter.charCodeAt(0);
//   return (n >= 65 && n < 91) || (n >= 97 && n < 123) || (n >= 48 && n < 58);
// }

// Simple Adding

// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should
// return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

function simpleAdding(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(simpleAdding(20));

// Letter Capitalize

// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will
// be separated by only one space.

function letterCapitalize(str) {
  const words = str.split(' ').map(capitalize);
  console.log(words);
  let answer = '';

  for (let i = 0; i < words.length; i++) {
    answer = answer + words[i] + ' ';
    console.log(answer);
  }

  return answer;
}

function capitalize(word) {
  const letters = word.split('');
  letters[0] = letters[0].toUpperCase();
  return letters.join('');
}

console.log(letterCapitalize('construyendo tres muros defensivos ante la desaceleración'));

// Check Nums

// Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1,
// otherwise return the string false. If the parameter values are equal to each other then return the string -1.

function checkNums(num1, num2) {
  if (num2 > num1) {
    return true;
  } else if (num1 === num2) {
    return '-1';
  } else return false;
}

console.log(checkNums(1, 2));

// Time Convert

// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter
// converts to (ie.if num = 63 then the output should be 1: 3).Separate the number of hours and minutes with a colon.

function timeConvert(num) {
  let hour = Math.floor(num / 60);
  let minutes = num - hour * 60;
  return `${hour}:${minutes}`;
}

console.log(timeConvert(259));

// Alphabet Soup

// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical
// order (ie.hello becomes ehllo).Assume numbers and punctuation symbols will not be included in the string.

function alphabetSoup(str) {
  return str
    .split('')
    .sort()
    .join('');
}

console.log(alphabetSoup('jsñaidofjioejñaoiejaoif'));
