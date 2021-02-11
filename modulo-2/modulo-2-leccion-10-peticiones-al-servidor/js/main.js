"use strict";

// RAND.FUN

// ejemplo

// function getEmoji() {
//   fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
//     .then(response => response.json())
//     .then(data => {
//       document.querySelector('.js-result').innerHTML = data.result
//     });
// }
// document.querySelector('.js-emoji').addEventListener("click", getEmoji);

// ejercicio 1

// function getNumber() {
//   fetch("https://api.rand.fun/number/integer?min=0&max=1000")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.result);
//       document.querySelector('.js-result').innerHTML = data.result
//     });
// }
// document.querySelector('.js-emoji').addEventListener("click", getNumber);

// DOG.API

// ejemplo

// function getDogImage() {
//   fetch("https://dog.ceo/api/breed/image/random")
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data)
//       const img = document.querySelector("img");
//       img.src = data.message;
//       img.alt = "Un perro";
//     });
// }
// const btn = document.querySelector(".js-dog");
// btn.addEventListener("click", getDogImage);

// ejercicio 2 - chihuahuas

// function getDogImage() {
//   fetch("https://dog.ceo/api/breed/chihuahua/images/random")
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data)
//       const img = document.querySelector("img");
//       img.src = data.message;
//       img.alt = "Un perro";
//     });
// }
// const btn = document.querySelector(".js-dog");
// btn.addEventListener("click", getDogImage);

// API GITHUB

// ejercicio 3

// function getGithubData() {
//   const username = getUsername();
//   fetch(`https://api.github.com/users/${username}`)
//     .then((userResponse) => userResponse.json())
//     .then((data) => {
//       const nameResultElement = document.querySelector(".js-name-result");
//       nameResultElement.innerHTML = data.name;
//       const photo = document.querySelector(".js-photo");
//       photo.src = data.avatar_url;
//       photo.alt = `${data.name}`;
//       const publicReposElement = document.querySelector(".js-publicrepos");
//       publicReposElement.innerHTML = data.public_repos;
//     });
// }

// function getUsername() {
//   const usernameElement = document.querySelector(".js-username");
//   return usernameElement.value;
// }

// const searchBtnElement = document.querySelector(".js-search");
// searchBtnElement.addEventListener("click", getGithubData);

// ejercicio 4

// function getGithubData() {
//   const orgname = getOrgname();
//   fetch(`https://api.github.com/users/${orgname}`)
//     .then((urlResponse) => urlResponse.json())
//     .then((dataUrl) => {
//       console.log(dataUrl);
//       // const urlRepoList = data.repos_url;
//       // console.log(urlRepoList);
//       // fetch(urlRepoList)
//       return fetch(dataUrl.repos_url);
//     })
//     .then((responseRepos) => responseRepos.json())
//     .then((dataRepos) => {
//       console.log(dataRepos);
//       for (const repo of dataRepos) {
//         // console.log(repo.name);
//         listElement.innerHTML += `<li>${repo.name}</li>`;
//         // repoList.push(repo.name);
//       }
//       // console.log(repoList);
//       // for (let i = 0; i < dataRepos.length; i++) {
//       //   console.log(dataRepos[i].name);
//       // }
//     });
// }

// function getOrgname() {
//   const orgnameElement = document.querySelector(".js-orgname");
//   return orgnameElement.value;
// }

// const listElement = document.querySelector(".js-result-list");

// // let repoList = [];

// const searchBtnElement = document.querySelector(".js-search");
// searchBtnElement.addEventListener("click", getGithubData);

// coger objeto en [0].name
// coger objeto en [1].name
