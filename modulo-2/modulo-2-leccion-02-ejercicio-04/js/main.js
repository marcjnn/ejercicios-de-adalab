"use strict";

const dinnerPrice = 128;
const participants = 9;
const chupito = 2;
const priceGirls = (dinnerPrice - chupito) / participants;
const priceAna = priceGirls + chupito;
console.log(`Each of us has to pay ${priceGirls}€.`);
console.log(`Ana has to pay ${priceAna}€.`);