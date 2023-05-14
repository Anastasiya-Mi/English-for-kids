import { words } from "./variables.js";
import { createBtn } from "./create-elements.js";
import { state, btn_aside } from "./aside.js";
import { showSidebar } from "./aside.js";
import {
  CardsSoftCategories,
  createSoftCategoriesOnClick,
  playAudio,
} from "./class.js";
import { playQueue, random } from "./game-mode.js";
import { setNumberOfRepeats } from "./localstorage.js";

export function changeState(event) {
  let status = state.checked;  
  if (status) {
    let firstChild = document.querySelector(
      ".content > div:nth-child(1)"
    ).className;
    if (firstChild === "category_wrap") {
      addBtnStartGame();
      removeEventListener();
      let btnStartsGame = document.querySelector(".start_game");
      btnStartsGame.addEventListener("click", addPlayMode);
      btnStartsGame.addEventListener("click", playQueue);
    } else {
      addBtnStartGame();
      addPlayModeForCards();
      removeEventListener();
      let category = document.querySelectorAll(".front");
      category.forEach((element) => {
        element.removeEventListener("click", playAudio);
        element.removeEventListener("click", setNumberOfRepeats);
      });
      let btnStartsGame = document.querySelector(".start_game");
      btnStartsGame.addEventListener("click", playQueue);
    }
  } else {
    let answers = document.querySelector("#answers");
    if (answers.childNodes.length != 0) {
      answers.classList.remove("show");
    }
    let firstChild = document.querySelector(
      ".content > div:nth-child(1)"
    ).className;
    if (firstChild === "category_wrap") {
      returnEventListener();
    } else {
      returnEventListener();
      removePlayMode();
    }
  }
}

export function addPlayMode(event) {
  let cards = random();
  let content = document.querySelector(".content");
  content.innerHTML = "";
  let newCards = new CardsSoftCategories(cards);
  newCards.render();
  newCards.hideFragment();
}

export function addPlayModeForCards() {
  let value = document.querySelector(
    ".content > div:nth-child(1) > div:nth-child(1)"
  ).className;
  let cards = words[value];
  let content = document.querySelector(".content");
  content.innerHTML = "";
  let newCards = new CardsSoftCategories(cards);
  newCards.render();
  newCards.hideFragment();
}

export function removePlayMode() {
  let content = document.querySelector(".content");
  let value = document.querySelector(
    ".content > div:nth-child(1)>div:nth-child(1)"
  ).className;
  let cards = words[value];  
  content.innerHTML = "";
  let newCards = new CardsSoftCategories(cards);
  newCards.render();
  newCards.btnEvent();
  newCards.audioEvent();
  newCards.showFragment();
}

export function addBtnStartGame() {
  let content = document.querySelector(".content_wrap");
  let btnStart = document.querySelector(".start_game");
  if (btnStart) {
    return;
  } else {
    let btnStartGame = createBtn("button", "start_game");
    btnStartGame.innerText = "start game";
    content.append(btnStartGame);
  }
}

export function removeEventListener() {
  btn_aside.removeEventListener("click", showSidebar);
  btn_aside.setAttribute("disabled", "disabled");
  let categoryMain = document.querySelectorAll(".category_wrap");
  categoryMain.forEach((element) => {
    element.removeEventListener("click", createSoftCategoriesOnClick);
  });
}

export function returnEventListener() {
  btn_aside.addEventListener("click", showSidebar);
  btn_aside.removeAttribute("disabled", "disabled");
  let categoryMain = document.querySelectorAll(".category_wrap");
  categoryMain.forEach((element) => {
    element.addEventListener("click", createSoftCategoriesOnClick);
  });
  let btnStartGame = document.querySelector(".start_game");
  if (btnStartGame != null) {
    btnStartGame.remove();
  }
  let btnRepeat = document.querySelector(".repeat");
  if (btnRepeat != null) {
    btnRepeat.remove();
  }
}
