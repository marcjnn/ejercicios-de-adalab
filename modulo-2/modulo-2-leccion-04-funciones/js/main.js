"use strict";

// EJERCICIO 1

console.log("EJERCICIO 1");

function multiply(a, b) {
  const result = a * b;
  return result;
}

const multiplicationOne = multiply(3, 6);
const multiplicationTwo = multiply(12, 64);
const multiplicationThree = multiply(42, 42);


console.log(multiplicationOne);
console.log(multiplicationTwo);
console.log(multiplicationThree);

// EJERCICIO 2

console.log("EJERCICIO 2");

function meanFourNumbers(a, b, c, d) {
  const result = (a + b + c + d) / 4;
  return result;
}

const meanOne = meanFourNumbers(3, 6, 19, 4);
const meanTwo = meanFourNumbers(15, 25, 50, 10);
const meanThree = meanFourNumbers(32, 32, 32, 32);

console.log(meanOne);
console.log(meanTwo);
console.log(meanThree);

// EJERCICIO 3

console.log("EJERCICIO 3");

function calculatePrice(a) {
  const netSalesPrice = a;
  const vat = 0.21;
  const grossPrice = netSalesPrice + (netSalesPrice * vat);

  return `Precio sin IVA: ${netSalesPrice}, IVA: ${vat} y Total: ${grossPrice}.`
}

const firstPrice = calculatePrice(10);
const secondPrice = calculatePrice(100);
const thirdPrice = calculatePrice(1000);

console.log(firstPrice);
console.log(secondPrice);
console.log(thirdPrice);

// EJERCICIO 4

console.log("EJERCICIO 4");

function trueOrFalse(a) {
  if (a % 2 === 0) {
    return true;
  } else { return false}
}

const trueOrFalseOne = trueOrFalse(9);
const trueOrFalseTwo = trueOrFalse(20);
const trueOrFalseThree = trueOrFalse(1983);

console.log(trueOrFalseOne);
console.log(trueOrFalseTwo);
console.log(trueOrFalseThree);

// EJERCICIO 5

console.log("EJERCICIO 5");

function getEl(selector) {
  const selectedElement = document.querySelector(selector);
  return selectedElement;
}

const hideTitle = getEl(".title");
hideTitle.innerHTML = "Later I'll try to add or remove classes";