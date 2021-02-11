console.log("EJERCICIO 1");

// const movies = ["Forrest Gump", "Gone with the wind", "Raiders of the Lost Ark"];

// movies[3] = "Seven Samurai";
// movies[4] = "Once Upon a Time in The West";
// movies[5] = "Spirited Away";

// console.log(movies);

// movies[5] = "My Neighbour Totoro"

// console.log(movies);

function workWithMovies() {
  const movies = ["Forrest Gump", "Gone with the wind", "Raiders of the Lost Ark"];
  movies[3] = "Seven Samurai";
  movies[4] = "Once Upon a Time in The West";
  movies[5] = "Spirited Away";
  
  console.log(movies);
  
  movies[5] = "My Neighbour Totoro"
  
  console.log(movies);
};

workWithMovies();

console.log("EJERCICIO 2");

for (let i = 1; i <= 10; i++) {
  // puede ser el template o mejor concatenando
  console.log(`Voy por la vuelta ${i}`);
}

console.log("EJERCICIO 3");

let acc = 0;

for (let i = 1; i <= 10 ; i++) {
  acc +=2
};

console.log(`El resultado es: ${acc}`)

console.log("EJERCICIO 4");

// last year - 2017
// 15 next moons
// print years

let huntersMoonYear = 2017;

for (let i = 1; i <= 15; i++) {
  huntersMoonYear += 3;
  console.log(huntersMoonYear);
}

console.log("EJERCICIO 5");

const numbers = [17, 33, 69, 192, 478, 12, 99];
let numbersSum = 0;

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  numbersSum += numbers[i];
  console.log(numbersSum);
};

let average = numbersSum / numbers.length

console.log(average);

console.log("EJERCICIO 6");

const buttonElement = document.querySelector(".js-button");
const movieOneElement = document.querySelector(".js-movie-one");
const movieTwoElement = document.querySelector(".js-movie-two");
const messagesElement = document.querySelector(".js-messagesForHuman");

const favouriteMovies = [];

function handleFavMovies() {
  favouriteMovies[0] = movieOneElement.value;
  favouriteMovies[1] = movieTwoElement.value;
  console.log(favouriteMovies);

  if (!favouriteMovies[0] || !favouriteMovies[1]) {
    return alert("please type in two movie titles");
  }

  if (favouriteMovies[0] === favouriteMovies[1]) {
    return alert("please type in two different titles");
  }

  // for (let i = 0; i < favouriteMovies.length; i++) {
  //   console.log(`¡A mí también me encantó "${favouriteMovies[i]}"! Tenemos mucho en común, humana.`);
  //   messagesElement.innerHTML += `<p>¡A mí también me encantó "${favouriteMovies[i]}"! Tenemos mucho en común, humana.</p>`
  // }

  for (const favouriteMovie of favouriteMovies) {
    console.log(`¡A mí también me encantó "${favouriteMovie}"! Tenemos mucho en común, humana.`);
    messagesElement.innerHTML += `<p>¡A mí también me encantó "${favouriteMovie}"! Tenemos mucho en común, humana.</p>`
  }
}

buttonElement.addEventListener("click", handleFavMovies);

console.log("EJERCICIO 7");

const adalabers = [
  {
    name: "María",
    age: 29,
    ocupation: "diseñadora"
  },
  {
    name: "Lucía",
    age: 31,
    ocupation: "ingeniera química"
  },
  {
    name: "Susana",
    age: 34,
    ocupation: "periodista"
  },
  {
    name: "Rocío",
    age: 25,
    ocupation: "actriz"
  },
  {
    name: "Inmaculada",
    age: 21,
    ocupation: "diseñadora"
  }
];

function countAdalabers (adaArray) {
  // número de adalabers en el listado
  return adaArray.length
};

console.log(countAdalabers(adalabers));

function averageAge(adaArray) {
  let totalAge = 0;
  for (let i = 0; i < adaArray.length; i++) {
    totalAge += adaArray[i].age;
  }
  const averageAge = totalAge / adaArray.length
  return averageAge;
}

console.log(averageAge(adalabers));

function theYoungest(adaArray) {
  // opción 1
  // el nombre de la adalaber más joven
  // let theYoungest = "";
  // let lowestAge = 0;
  // for (let i = 0; i < adaArray.length; i++) {
  //   if (lowestAge === 0) {
  //     theYoungest = adaArray[i].name;
  //     lowestAge = adaArray[i].age
  //   } else if (adaArray[i].age < lowestAge) {
  //     theYoungest = adaArray[i].name;
  //     lowestAge = adaArray[i].age
  //   }
  // }

  //opción 2
  if (adaArray.length === 0) {
    return "";
  }
  let theYoungestName = adaArray[0].name;
  let lowestAge = adaArray[0].age;
  // empiezo por 1 porque 0 es el valor inicial
  for (let i = 1; i < adaArray.length; i++) {
    if (adaArray[i].age < lowestAge) {
      theYoungestName = adaArray[i].name;
      lowestAge = adaArray[i].age
    }
  }

  // opción 3 - for/in; for/of
  // let theYoungestName = "";
  // let lowestAge = 0;
  // for (const entry of adaArray) {
  // if (lowestAge === 0) {
  //   theYoungestName = entry.name;
  //   lowestAge = entry.age
  //   } else if (entry.age < lowestAge) {
  //     theYoungestName = entry.name;
  //     lowestAge = entry.age
  //   }
  // }
  return theYoungestName;
}

console.log(theYoungest(adalabers));

function countDesigners(adaArray) {
  let adaDesigners = 0
  for (let i = 0; i < adaArray.length; i++) {
    if (adaArray[i].ocupation === "diseñadora") {
      adaDesigners += 1
    }
  }
  return adaDesigners;
}

console.log(countDesigners(adalabers));

console.log("EJERCICIO 8");

// pulsamos cualquier botón -> fondo rojo
// la siguiente vez -> blanco

// select buttons (js-button)
// eventListener for button
// create handler
// select body (js-page)
// add/remove class redBackground

// const alarmButtonsElement = document.querySelectorAll(".js-alarm-buttons");
const alarmButtonsElement = document.querySelector(".js-alarm-buttons");
const alarmButtonElement = alarmButtonsElement.querySelectorAll(".js-alarm-button");
const bodyElement = document.querySelector(".js-page");

function handleRedBackground() {
  bodyElement.classList.toggle("redBackground");
}

for (let i = 0; i < alarmButtonsElement.length; i++) {
  // alarmButtonsElement[i].addEventListener("click", handleRedBackground)
  alarmButtonElement[i].addEventListener("click", handleRedBackground)
}

// 


