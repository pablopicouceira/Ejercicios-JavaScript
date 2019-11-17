'use strict';

// 121. Best Time to Buy and Sell Stock

// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm
// to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

let precios = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  let mayorLucro = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      console.log(`price_i: ${prices[i]} price_j: ${prices[j]}`);
      const lucro = prices[j] - prices[i];
      mayorLucro = Math.max(mayorLucro, lucro);
    }
  }
  return mayorLucro;
}

console.log(maxProfit(precios));

// 217. Contains Duplicate

// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is
// distinct.

const array = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsDuplicate(array));

// 242. Valid Anagram

// Given two strings s and t , write a function to determine if t is an anagram of s.

let string1 = 'anagram';
let string2 = 'nagaram';

function isAnagram(s, t) {
  let newString1 = s
    .split('')
    .sort()
    .join('');
  console.log(newString1);

  let newString2 = t
    .split('')
    .sort()
    .join('');
  console.log(newString2);

  if (newString1 === newString2) {
    return true;
  }
  return false;
}

console.log(isAnagram(string1, string2));

// 283. Move Zeroes

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

let zeroes = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
  let contador = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[contador++] = nums[i];
    }
  }
  while (contador < nums.length) {
    nums[contador++] = 0;
  }
  return nums;
}

console.log(moveZeroes(zeroes));

// 485. Max Consecutive Ones

// Given a binary array, find the maximum number of consecutive 1s in this array.

const binarios = [1, 0, 1, 1, 1, 1, 0, 1, 1];

function findMaxConsecutiveOnes(nums) {
  let repeatedOnes = 0;
  let mayor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      repeatedOnes++;
      if (repeatedOnes > mayor) {
        mayor = repeatedOnes;
      }
    }
    if (nums[i] === 0) {
      repeatedOnes = 0;
    }
  }
  return mayor;
}

console.log(findMaxConsecutiveOnes(binarios));

// 657. Robot Return to Origin

// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at
// (0, 0) after it completes its moves.
// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left),
// U(up), and D(down).If the robot returns to the origin after it finishes all of its moves, return true.Otherwise, return false.
// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make
// it move left, etc.Also, assume that the magnitude of the robot's movement is the same for each move.

let movimientos = 'UDLRDDDULRUUR';

function judgeCircle(moves) {
  let U = 0;
  let D = 0;
  let R = 0;
  let L = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves.charAt(i) === 'U') {
      U++;
    } else if (moves.charAt(i) === 'D') {
      D++;
    } else if (moves.charAt(i) === 'R') {
      R++;
    } else {
      L++;
    }
  }

  const diferenciaHorizontal = R - L;
  const diferenciaVertical = U - D;

  if (diferenciaHorizontal === 0 && diferenciaVertical === 0) {
    return true;
  } else return false;
}

console.log(judgeCircle(movimientos));

// 771. Jewels and Stones

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S
// is a type of stone you have.You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered
// a different type of stone from "A".

const jewels = 'aA';
const stones = 'aAAbbbb';
let contador = 0;

function numJewelsInStones(J, S) {
  let contador = 0;
  for (let i = 0; i < S.length; i++) {
    for (let k = 0; k < J.length; k++) {
      if (S[i] === J[k]) {
        contador++;
      }
    }
  }
  return contador;
}

console.log(numJewelsInStones(jewels, stones));

// 832. Flipping an Image

// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in
// [0, 1, 1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in
// [1, 0, 0].

let array2d = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0]
];

// 905. Sort Array By Parity

// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements
// of A. You may return any answer array that satisfies this condition.

const array1 = [3, 1, 2, 4];
function sortArrayByParity(A) {
  let arrayEven = [];
  let arrayOdds = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      arrayEven.push(A[i]);
    } else {
      arrayOdds.push(A[i]);
    }
  }
  let newArray = arrayEven.concat(arrayOdds);
  return newArray;
}

console.log(sortArrayByParity(array1));

// 961. N-Repeated Element in Size 2N Array

// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
// Return the element repeated N times.

const array2 = [5, 1, 5, 2, 5, 3, 5, 4];

function repeatedNTimes(A) {
  let number;
  for (let i = 0; i < A.length - 1; i++) {
    for (let k = i + 1; k < A.length; k++) {
      if (A[i] === A[k]) {
        number = A[i];
      }
    }
  }
  return number;
}
console.log(repeatedNTimes(array2));
