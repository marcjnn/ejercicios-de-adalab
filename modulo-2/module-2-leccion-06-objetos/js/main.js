"use strict";

// console.log("EJERCICIO 1");

// const ourDiv = document.querySelector(".js-results")

// ourDiv.innerHTML = "<h2>EJERCICIO 1</h2>"

// const adalaber1 = {
//   name: "Susana",
//   age: 34,
//   ocupation: "periodista"
// };

// ourDiv.innerHTML += `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.ocupation}.</p>`;

// const adalaber2 = {
//   name: "Rocío",
//   age: 25,
//   ocupation: "actriz"
// };

// ourDiv.innerHTML += `<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.ocupation}.</p>`;

// console.log("EJERCICIO 2");
// ourDiv.innerHTML += "<h2>EJERCICIO 2</h2>";

// adalaber1.run = () => {return "Estoy corriendo"};

// console.log(adalaber1.run());

// adalaber1.runAMarathon = (distance) => {return`Estoy corriendo un maratón de ${distance} kilómetros.`};

// console.log(adalaber1.runAMarathon(50));

// console.log("EJERCICIO 3");
// ourDiv.innerHTML += "<h2>EJERCICIO 3</h2>";

// adalaber1.showBio = function() {return `Mi nombre es ${this.name}, tengo ${this.age} años, y soy ${this.ocupation}.`};

// console.log(adalaber1.showBio());

// adalaber2.showBio = function() {return `Mi nombre es ${this.name}, tengo ${this.age} años, y soy ${this.ocupation}.`};

// console.log(adalaber2.showBio());

// console.log("EJERCICIO 4");
// ourDiv.innerHTML += "<h2>EJERCICIO 4</h2>";

// ourDiv.innerHTML += `<button class="js-event">event</button>`;

// const ourButton = document.querySelector(".js-event");

// const handleButton = function(event) {
//   console.log(event);
// }

// ourButton.addEventListener("click", handleButton);

console.log("EJERCICIO 6");
// ourDiv.innerHTML += "<h2>EJERCICIO 6</h2>";

const pearBasket = {
  maxNum: 15,
  minNum: 0,
  currentNum: 3,
  initialNum: 0,
  // this. no funciona - de momento - con arrow functions
  addPear: function() {
    if (this.currentNum >= this.maxNum) {
      return "Ya no puedes comprar más peras.";
    } else {
      this.currentNum += 1;
      return this.currentNum;
    }
  },
  removePear: function() {
    if (this.currentNum <= this.minNum) {
      return "Tu cesta está vacía, ya no puedes quitar más peras.";
    } else if (this.currentNum > 0 && this.currentNum <= this.maxNum) {
      this.currentNum -= 1;
      return this.currentNum;
    } else {
      return "Has cogido demasiadas peras desgraciado.";
    }
  },
  // resetPearNumber: () => {}
};

console.log(pearBasket.addPear())