import { words, link } from "./variables.js";

import { state } from "./aside.js";

import { createCardOnLink, Cards } from "./class.js";
import { changeState } from "./change-mode.js";
import { statistic, createLocalStoragePack } from "./localstorage.js";
import { createStatsPage } from "./table.js";

let startPage = new Cards(words.category);
startPage.render();
startPage.createCard();

let newLink = [];
let statsPage = document.querySelector("#nine");
for (let i = 0; i < link.length - 1; i++) {
  newLink.push(link[i]);
}

newLink.forEach((element) => {
  element.addEventListener("click", createCardOnLink);
});

state.addEventListener("click", changeState);

if (statistic === null) {
  createLocalStoragePack();
}

statsPage.addEventListener("click", createStatsPage);
