"use strict";

// EJERCICIO 1

// const listEl = document.querySelector(".js-list");
// const btnEl = document.querySelector(".js-btn");

// const numbers = [1, 2, 3];

// function handleRenderList() {
//   for (const number of numbers) {
//     const newItem = document.createElement("li");
//     const newContent = document.createTextNode(number);
//     newItem.appendChild(newContent);
//     listEl.appendChild(newItem);
//   }
// }

// btnEl.addEventListener("click", handleRenderList);

// EJERCICIO 2

// const photosContainerEl = document.querySelector(".js-photos-container");
// const inputEl = document.querySelector(".js-input");
// const btnEl = document.querySelector(".js-btn");

// const cities = [
//   {
//     city: "Madrid",
//     photos: [
//       {
//         src: "./images/madrid01.jpg",
//         alt: "Madrid",
//       },
//       {
//         src: "./images/madrid02.jpg",
//         alt: "Madrid",
//       },
//       {
//         src: "./images/madrid03.jpg",
//         alt: "Madrid",
//       },
//     ],
//   },
//   {
//     city: "Paris",
//     photos: [
//       {
//         src: "./images/paris01.jpg",
//         alt: "Paris",
//       },
//       {
//         src: "./images/paris02.jpg",
//         alt: "Paris",
//       },
//       {
//         src: "./images/paris03.jpg",
//         alt: "Paris",
//       },
//     ],
//   },
//   {
//     city: "New York",
//     photos: [
//       {
//         src: "./images/newyork01.jpg",
//         alt: "New York",
//       },
//       {
//         src: "./images/newyork02.jpg",
//         alt: "New York",
//       },
//       {
//         src: "./images/newyork03.jpg",
//         alt: "New York",
//       },
//     ],
//   },
// ];

// // ¿¿¿ use array of objects to compare not this temporary one ???
// const citiesArray = ["Madrid", "Paris", "New York"];

// const errorMessage = "Please choose a city between Madrid, Paris and New York";

// function handlePhotos() {
//   // receivs value from input
//   // checks if not empty
//   // compare to one of three cities
//   // else message please choose between Madrid, Paris and New York and default photos
//   if (!inputEl.value) {
//     showErrorMessage();
//   }
//   // ¿¿¿ where to add .toUpper/LowerCase ???
//   const chosenCity = inputEl.value;
//   if (citiesArray.includes(chosenCity)) {
//     removeAllChildren(photosContainerEl);
//     addPhotos(chosenCity);
//   } else {
//     showErrorMessage();
//   }
// }

// function showErrorMessage() {
//   const errorMessageEl = document.createElement("p");
//   const errorMessageContent = document.createTextNode(errorMessage);
//   errorMessageEl.appendChild(errorMessageContent);
//   photosContainerEl.insertBefore(errorMessageEl, photosContainerEl.firstChild);
// }

// function removeAllChildren(parentEl) {
//   while (parentEl.firstChild) {
//     parentEl.firstChild.remove();
//   }
// }

// function addPhotos(city) {
//   for (let i = 0; i < cities.length; i++) {
//     if (cities[i].city === city) {
//       for (let j = 0; j < cities[i].photos.length; j++) {
//         const newImage = document.createElement("img");
//         newImage.setAttribute("src", cities[i].photos[j].src);
//         newImage.setAttribute("alt", cities[i].photos[j].alt);
//         photosContainerEl.appendChild(newImage);
//       }
//     }
//   }
// }

// btnEl.addEventListener("click", handlePhotos);

// EJERCICIO 3

const formElement = document.querySelector(".js-form");

const users = [
  {
    nombre: "Maria",
    apellido: "Gonzales",
    tfno: "666555444",
  },
  {
    nombre: "Ana",
    apellido: "Sanchez",
    tfno: "645645645",
  },
  {
    nombre: "Laura",
    apellido: "Perez",
    tfno: "678678678",
  },
];

const selectBtn = document.createElement("select");

function createOptions() {
  for (const user of users) {
    // user.nombre => option de select
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", `${user.nombre}`);
    const optionElementContent = document.createTextNode(`${user.nombre}`);
    optionElement.appendChild(optionElementContent);
    selectBtn.appendChild(optionElement);
  }
}

createOptions();

formElement.appendChild(selectBtn);

function handleInputValue() {
  const inputValue = selectBtn.options[selectBtn.selectedIndex].text;
  // return inputValue;
  // for (const user in users) {
  //   if (inputValue === user.nombre) {
  //     console.log(inputValue);
  //   }
  // }
}

selectBtn.addEventListener("change", handleInputValue);

// coge value de option
// compara con array - nombre
// cambia valores de los inputs
// if (user.nombre === )

// respuesta de SLackOverflow
// var e = document.getElementById("ddlViewBy");
// var strUser = e.options[e.selectedIndex].text;

// function whtv() {
//   const selectedUser = handleInputValue();
// console.log(selectedUser);
// }

// whtv();
