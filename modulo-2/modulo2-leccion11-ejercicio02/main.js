"use strict";
const buttonElement = document.querySelector(".js-button");
const inputElement = document.querySelector(".js-input");
const listElement = document.querySelector(".js-list");

let protagonist;
let protaList;

function getNamePeople() {
  protagonist = inputElement.value;
  fetch("https://swapi.dev/api/people/?search=" + protagonist)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      protaList = data.results;
      let htmlCode = "";
      for (let i = 0; i < protaList.length; i++) {
        htmlCode += `<li>${protaList[i].name}, ${protaList[i].gender}</li>`;

        /*if (
          protaList[i].name.toUpperCase().includes(protagonist.toUpperCase())
        ) {
          console.log("correcto");
        } else {
          console.log("incorrecto");
        }*/
      }
      listElement.innerHTML = htmlCode;
    });
}

buttonElement.addEventListener("click", getNamePeople);
