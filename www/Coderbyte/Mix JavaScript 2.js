"use strict";

// Consecutive

// Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the
// contents of arr consecutive from the lowest number to the highest number.For example: If arr contains[4, 8, 6] then the output should be
// 2 because two numbers need to be added to the array(5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may
// be entered as parameters and no array will have less than 2 elements.

let array = [-2, 10, 4]; //[(5, 10, 15)]; //; //; //

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
