'use strict';
const buttonElement = document.querySelector('.js-button');
const dogBreedElement = document.querySelector('.js-dogBreed');
const dogImageElement = document.querySelector('.js-image');

function getBreedTotal() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
      let breedTotal = [];
      for (const breed in data.message) {
        breedTotal.push(breed);
      }
      const breedOk = breedTotal.length;
      fetch(`https://api.rand.fun/number/integer?min=1&max=${breedOk}`)
        .then((response) => response.json())
        .then((data) => {
          const resultNumber = data.result;
          const selectedBreed = breedTotal[resultNumber];
          dogBreedElement.innerHTML = selectedBreed;
          fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
            .then((response) => response.json())
            .then((data) => {
              dogImageElement.src = data.message;
              dogImageElement.alt = selectedBreed;
            });
        });
    });
}

buttonElement.addEventListener('click', getBreedTotal);
