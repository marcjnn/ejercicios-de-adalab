"use strict";

// console.log("EJERCICIO 1");

// function get100Numbers() {
//   let ourBrandNewArray = [];
//   for (let i = 1; i <= 100; i++) {
//     ourBrandNewArray.push(i);
//   }
//   return ourBrandNewArray;
// }

// console.log(get100Numbers());

// function getNumbers(num) {
//   let ourBrandNewArray = [];
//   for (let i = 1; i <= num; i++) {
//     ourBrandNewArray.push(i);
//   }
//   return ourBrandNewArray;
// }

// console.log(getNumbers(num));

// console.log("EJERCICIO 2");

// let arrayToReverse = get100Numbers();

// function getReversed100Numbers() {
//   let ourBrandNewArrayReversed = arrayToReverse.reverse();
//   return ourBrandNewArrayReversed;
// }

// console.log(getReversed100Numbers());

// console.log("EJERCICIO 3");

// const lostNumbers = [4, 8, 15, 16, 23, 42];

// function concatLostNumbers(arr) {

//   let lostNumbersEven = [];

//   for (const number of arr) {
//     if (number % 2 === 0) {
//       // why does it push the string and not the number?
//       lostNumbersEven.push(number);
//     }
//   }

//   console.log(lostNumbersEven);

//   let lostNumbersMultiplesOf3 = []

//   for (const number of arr) {
//     if (number % 3 === 0) {
//       // why does it push the string and not the number?
//       lostNumbersMultiplesOf3.push(number);
//     }
//   }

//   console.log(lostNumbersMultiplesOf3);

//   const newLostNumbers = lostNumbersEven.concat(lostNumbersMultiplesOf3);

//   return newLostNumbers;
// }

// const someLostNumbers = concatLostNumbers(lostNumbers);

// for (const number of someLostNumbers) {
//   console.log(number);
// }

console.log("EJERCICIO 4");

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

