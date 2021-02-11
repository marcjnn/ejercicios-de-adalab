"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");
const filterInput = document.querySelector(".js-filter");
const formElement = document.querySelector(".js-form");

let palettes = [];

// api - metemos todo en funciones. TODO

function getDataFromApi() {
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      // al coger datos, limpiar lo que no necesitamos console.log(data) => console.log(data.palettes)
      palettes = data.palettes;
      paintPalettes();
      setInLocalStorage();
    });
}

// local storage

function setInLocalStorage() {
  const stringPalettes = JSON.stringify(palettes);
  localStorage.setItem("palettes", stringPalettes);

  // menos legible, mas pro: si trabajamos con gente senior bien, si hay muchos junior, mejor mas legible; para entrevista tecnica, tb mejor un poco más legible para que se vea lo que está haciendo cada parte del código
  // localStorage.setItem("palettes", JSON.stringify(palettes));
}

// se puede dividir en dos partes: primero compruebo si hay datos en LS; en caso que si, ejecuto getFromLocalStorage, si no ejecuto getDataFromApi
function getFromLocalStorage() {
  const localStoragePalettes = localStorage.getItem("palettes");
  // if (localStoragePalettes === null)
  if (!localStoragePalettes) {
    getDataFromApi();
  } else {
    const arrayPalettes = JSON.parse(localStoragePalettes);
    palettes = arrayPalettes;
    paintPalettes();
  }
}

// filter

function handleFilter() {
  console.log("filtrando...");
  paintPalettes();
}

filterInput.addEventListener("keyup", handleFilter);

// submit form

function handleForm(ev) {
  ev.preventDefault();
}

formElement.addEventListener("submit", handleForm);

// paint

function paintPalettes() {
  // para comprobar que los tengo: console.log("pintando...", palettes)
  let html = "";
  for (const palette of palettes) {
    if (palette.name.toLowerCase().includes(filterInput.value.toLowerCase())) {
      html += `<li class="palette">`;
    } else {
      html += `<li class="palette palette--hidden">`;
    }
    html += `<h2 class="palette__title">${palette.name}</h2>`;
    html += `<div class="palette__colors">`;
    for (const color of palette.colors) {
      html += `<div class="palette__color" style="background-color: #${color}"></div>`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  palettesContainer.innerHTML = html;
}

// start app

getFromLocalStorage();
